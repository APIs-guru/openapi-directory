# openapi_client.SegmentApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**segment_analytics_0**](SegmentApi.md#segment_analytics_0) | **GET** /segments/data_series | Segment Analytics
[**segment_details_0**](SegmentApi.md#segment_details_0) | **GET** /segments/details | Segment Details
[**segment_list_0**](SegmentApi.md#segment_list_0) | **GET** /segments/list | Segment List


# **segment_analytics_0**
> segment_analytics_0(segment_id=segment_id, length=length, ending_at=ending_at)

Segment Analytics

This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"size\" : (int) size of the segment on that date         },         ...     ] } ```

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
    api_instance = openapi_client.SegmentApi(api_client)
    segment_id = '{{segment_identifier}}' # str | (Required) String  Segment API identifier. (optional)
    length = '14' # str | (Required) Integer  Max number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive. (optional)
    ending_at = '2018-06-27T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. (optional)

    try:
        # Segment Analytics
        api_instance.segment_analytics_0(segment_id=segment_id, length=length, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling SegmentApi->segment_analytics_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment_id** | **str**| (Required) String  Segment API identifier. | [optional] 
 **length** | **str**| (Required) Integer  Max number of days before &#x60;ending_at&#x60; to include in the returned series - must be between 1 and 100 inclusive. | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. | [optional] 

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

# **segment_details_0**
> segment_details_0(segment_id=segment_id)

Segment Details

This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {       \"message\": (required, string) the status of the export, returns 'success' when completed without errors,       \"created_at\" : (string) date created as ISO 8601 date,       \"updated_at\" : (string) date last updated as ISO 8601 date,       \"name\" : (string) segment name,       \"description\" : (string) human-readable description of filters,       \"text_description\" : (string) segment description,        \"tags\" : (array) tag names associated with the segment } ```

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
    api_instance = openapi_client.SegmentApi(api_client)
    segment_id = '{{segment_identifier}}' # str | (Required) String  Segment API identifier (optional)

    try:
        # Segment Details
        api_instance.segment_details_0(segment_id=segment_id)
    except Exception as e:
        print("Exception when calling SegmentApi->segment_details_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment_id** | **str**| (Required) String  Segment API identifier | [optional] 

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

# **segment_list_0**
> segment_list_0(page=page, sort_direction=sort_direction)

Segment List

This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"segments\" : [         {             \"id\" : (string) Segment API Identifier,             \"name\" : (string) segment name,             \"analytics_tracking_enabled\" : (boolean) whether the segment has analytics tracking enabled,             \"tags\" : (array) tag names associated with the segment         },         ...     ] } ```

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
    api_instance = openapi_client.SegmentApi(api_client)
    page = '1' # str | (Optional) Integer  The page of segments to return, defaults to 0 (returns the first set of up to 100) (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If `sort_direction` is not included, the default order is oldest to newest. (optional)

    try:
        # Segment List
        api_instance.segment_list_0(page=page, sort_direction=sort_direction)
    except Exception as e:
        print("Exception when calling SegmentApi->segment_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of segments to return, defaults to 0 (returns the first set of up to 100) | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If &#x60;sort_direction&#x60; is not included, the default order is oldest to newest. | [optional] 

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

