# openapi_client.CanvasApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**canvas_data_analytics_summary_0**](CanvasApi.md#canvas_data_analytics_summary_0) | **GET** /canvas/data_summary | Canvas Data Analytics Summary
[**canvas_data_series_analytics_0**](CanvasApi.md#canvas_data_series_analytics_0) | **GET** /canvas/data_series | Canvas Data Series Analytics
[**canvas_details_0**](CanvasApi.md#canvas_details_0) | **GET** /canvas/details | Canvas Details
[**canvas_list_0**](CanvasApi.md#canvas_list_0) | **GET** /canvas/list | Canvas List


# **canvas_data_analytics_summary_0**
> canvas_data_analytics_summary_0(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)

Canvas Data Analytics Summary

This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"data\": {     \"name\": (string) Canvas name,     \"total_stats\": {       \"revenue\": (float),       \"conversions\": (int),       \"conversions_by_entry_time\": (int),       \"entries\": (int)     },     \"variant_stats\": (optional) {       \"00000000-0000-0000-0000-0000000000000\": (API identifier for variant) {         \"name\": (string) name of variant,         \"revenue\": (float),         \"conversions\": (int),         \"entries\": (int)       },       ... (more variants)     },     \"step_stats\": (optional) {       \"00000000-0000-0000-0000-0000000000000\": (API identifier for step) {         \"name\": (string) name of step,         \"revenue\": (float),         \"conversions\": (int),         \"conversions_by_entry_time\": (int),         \"messages\": {           \"android_push\": (name of channel) [             {               \"sent\": (int),               \"opens\": (int),               \"influenced_opens\": (int),               \"bounces\": (int)               ... (more stats for channel)             }           ],           ... (more channels)         }       },       ... (more steps)     }   },   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CanvasApi(api_client)
    canvas_id = '{{canvas_id}}' # str | (Required) String   Canvas API identifier (optional)
    ending_at = '2018-05-30T23:59:59-5:00' # str | (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request (optional)
    starting_at = '2018-05-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Date on which the data export should begin (either length or starting_at required) (optional)
    length = '5' # str | (Optional) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) (optional)
    include_variant_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include variant stats (defaults to false) (optional)
    include_step_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include step stats (defaults to false) (optional)
    include_deleted_step_data = 'true' # str | (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) (optional)

    try:
        # Canvas Data Analytics Summary
        api_instance.canvas_data_analytics_summary_0(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)
    except Exception as e:
        print("Exception when calling CanvasApi->canvas_data_analytics_summary_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String   Canvas API identifier | [optional] 
 **ending_at** | **str**| (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request | [optional] 
 **starting_at** | **str**| (Optional) DateTime (ISO 8601 string)  Date on which the data export should begin (either length or starting_at required) | [optional] 
 **length** | **str**| (Optional) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) | [optional] 
 **include_variant_breakdown** | **str**| (Optional) Boolean  Whether or not to include variant stats (defaults to false) | [optional] 
 **include_step_breakdown** | **str**| (Optional) Boolean  Whether or not to include step stats (defaults to false) | [optional] 
 **include_deleted_step_data** | **str**| (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **canvas_data_series_analytics_0**
> canvas_data_series_analytics_0(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)

Canvas Data Series Analytics

This endpoint allows you to export time series data for a Canvas.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"data\": {     \"name\": (string) Canvas name,     \"stats\": [       {         \"time\": (string) date as ISO 8601 date,         \"total_stats\": {           \"revenue\": (float),           \"conversions\": (int),           \"conversions_by_entry_time\": (int),           \"entries\": (int)         },         \"variant_stats\": (optional) {           \"00000000-0000-0000-0000-0000000000000\": (API identifier for variant) {             \"name\": (string) name of variant,             \"revenue\": (int),             \"conversions\": (int),             \"conversions_by_entry_time\": (int),             \"entries\": (int)           },           ... (more variants)         },         \"step_stats\": (optional) {           \"00000000-0000-0000-0000-0000000000000\": (API identifier for step) {             \"name\": (string) name of step,             \"revenue\": (float),             \"conversions\": (int),             \"conversions_by_entry_time\": (int),             \"messages\": {               \"email\": [                 {                   \"sent\": (int),                   \"opens\": (int),                   \"unique_opens\": (int),                   \"clicks\": (int),                   ... (more stats)                 }               ],               ... (more channels)             }           },           ... (more steps)         }       },       ... (more stats by time)     ]   },   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CanvasApi(api_client)
    canvas_id = '{{canvas_id}}' # str | (Required) String  Canvas API Identifier (optional)
    ending_at = '2018-05-30T23:59:59-5:00' # str | (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request (optional)
    starting_at = '2018-05-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)   Date on which the data export should begin (either length or starting_at are required) (optional)
    length = '10' # str | (Optional) DateTime (ISO 8601 string)  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) (optional)
    include_variant_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include variant stats (defaults to false) (optional)
    include_step_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include step stats (defaults to false) (optional)
    include_deleted_step_data = 'true' # str | (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) (optional)

    try:
        # Canvas Data Series Analytics
        api_instance.canvas_data_series_analytics_0(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)
    except Exception as e:
        print("Exception when calling CanvasApi->canvas_data_series_analytics_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String  Canvas API Identifier | [optional] 
 **ending_at** | **str**| (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request | [optional] 
 **starting_at** | **str**| (Optional) DateTime (ISO 8601 string)   Date on which the data export should begin (either length or starting_at are required) | [optional] 
 **length** | **str**| (Optional) DateTime (ISO 8601 string)  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) | [optional] 
 **include_variant_breakdown** | **str**| (Optional) Boolean  Whether or not to include variant stats (defaults to false) | [optional] 
 **include_step_breakdown** | **str**| (Optional) Boolean  Whether or not to include step stats (defaults to false) | [optional] 
 **include_deleted_step_data** | **str**| (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **canvas_details_0**
> canvas_details_0(canvas_id=canvas_id)

Canvas Details

This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"created_at\": (string) date created as ISO 8601 date,   \"updated_at\": (string) date updated as ISO 8601 date,   \"name\": (string) Canvas name,   \"description\": (string) Canvas description,   \"archived\": (boolean) whether this Canvas is archived,   \"draft\": (boolean) whether this Canvas is a draft,   \"schedule_type\": (string) type of scheduling action,   \"first_entry\": (string) date of first entry as ISO 8601 date,   \"last_entry\": (string) date of last entry as ISO 8601 date,   \"channels\": (array of strings) step channels used with Canvas,   \"variants\": [     {       \"name\": (string) name of variant,       \"id\": (string) API identifier of the variant,       \"first_step_ids\": (array of strings) API identifiers for first steps in variant,       \"first_step_id\": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)     },     ... (more variations)   ],   \"tags\": (array of strings) tag names associated with the Canvas,   \"steps\": [     {       \"name\": (string) name of step,       \"id\": (string) API identifier of the step,       \"next_step_ids\": (array of strings) API identifiers of steps following step,       \"channels\": (array of strings) channels used in step,       \"messages\": {           \"message_variation_id\": (string) {  // <=This is the actual id               \"channel\": (string) channel type of the message (eg., \"email\"),               ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...           }       }     },     ... (more steps)   ],   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CanvasApi(api_client)
    canvas_id = '{{canvas_identifier}}' # str | (Required) String  Canvas API Identifier  (optional)

    try:
        # Canvas Details
        api_instance.canvas_details_0(canvas_id=canvas_id)
    except Exception as e:
        print("Exception when calling CanvasApi->canvas_details_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String  Canvas API Identifier  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **canvas_list_0**
> canvas_list_0(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)

Canvas List

This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).  > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"canvases\" : [    {     \"id\" : (string) Canvas API Identifier,     \"last_edited\": (ISO 8601 string) the last edited time for the message,     \"name\" : (string) Canvas name,     \"tags\" : (array) tag names associated with the Canvas,    },     ... (more Canvases)   ],   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CanvasApi(api_client)
    page = '1' # str | (Optional) Integer  The page of Canvases to return, defaults to `0` (returns the first set of up to 100) (optional)
    include_archived = 'false' # str | (Optional) Boolean  Whether or not to include archived Canvases, defaults to `false`. (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. (optional)
    last_edit_time_gt = '2020-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Filters the results and only returns Canvases that were edited greater than the time provided till now. (optional)

    try:
        # Canvas List
        api_instance.canvas_list_0(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)
    except Exception as e:
        print("Exception when calling CanvasApi->canvas_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of Canvases to return, defaults to &#x60;0&#x60; (returns the first set of up to 100) | [optional] 
 **include_archived** | **str**| (Optional) Boolean  Whether or not to include archived Canvases, defaults to &#x60;false&#x60;. | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. | [optional] 
 **last_edit_time_gt** | **str**| (Optional) DateTime (ISO 8601 string)  Filters the results and only returns Canvases that were edited greater than the time provided till now. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

