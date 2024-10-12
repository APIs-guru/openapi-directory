# openapi_client.CustomEventsApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_events_analytics_0**](CustomEventsApi.md#custom_events_analytics_0) | **GET** /events/data_series | Custom Events Analytics
[**custom_events_list_0**](CustomEventsApi.md#custom_events_list_0) | **GET** /events/list | Custom Events List


# **custom_events_analytics_0**
> custom_events_analytics_0(event=event, length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)

Custom Events Analytics

This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.  ### Components Used -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"count\" : (int)         },         ...     ] } ```  ### Fatal Error Response Codes The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.  | Error Code       | Reason / Cause                                                   | | ---------------- | ---------------------------------------------------------------- | | 400 Bad Request  | Bad Syntax                                                       | | 401 Unauthorized | Unknown or missing REST API Key                                  | | 429 Rate Limited | Over rate limit                                                  | | 5XX              | Internal server error, you should retry with exponential backoff |

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
    api_instance = openapi_client.CustomEventsApi(api_client)
    event = 'event_name' # str | (Required) String  The name of the custom event for which to return analytics  (optional)
    length = '24' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    unit = 'hour' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\") (optional)
    ending_at = '2014-12-10T23:59:59-05:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app (optional)
    segment_id = '{{segment_identifier}}' # str | (Optional) String  Segment API identifier indicating the analytics enabled segment for which event analytics should be returned (optional)

    try:
        # Custom Events Analytics
        api_instance.custom_events_analytics_0(event=event, length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)
    except Exception as e:
        print("Exception when calling CustomEventsApi->custom_events_analytics_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | **str**| (Required) String  The name of the custom event for which to return analytics  | [optional] 
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;) | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app | [optional] 
 **segment_id** | **str**| (Optional) String  Segment API identifier indicating the analytics enabled segment for which event analytics should be returned | [optional] 

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

# **custom_events_list_0**
> custom_events_list_0(page=page)

Custom Events List

This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"events\" : [         \"Event A\",         \"Event B\",         \"Event C\",         ...     ] } ```  ### Fatal Error Response Codes  The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.  | Error Code       | Reason / Cause                                                   | | ---------------- | ---------------------------------------------------------------- | | 400 Bad Request  | Bad Syntax                                                       | | 401 Unauthorized | Unknown or missing REST API Key                                  | | 429 Rate Limited | Over rate limit                                                  | | 5XX              | Internal server error, you should retry with exponential backoff |

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
    api_instance = openapi_client.CustomEventsApi(api_client)
    page = '3' # str | (Optional) Integer  The page of event names to return, defaults to 0 (returns the first set of up to 250) (optional)

    try:
        # Custom Events List
        api_instance.custom_events_list_0(page=page)
    except Exception as e:
        print("Exception when calling CustomEventsApi->custom_events_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of event names to return, defaults to 0 (returns the first set of up to 250) | [optional] 

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

