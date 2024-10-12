# openapi_client.SessionAnalyticsApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_sessions_by_time_0**](SessionAnalyticsApi.md#app_sessions_by_time_0) | **GET** /sessions/data_series | App Sessions by Time


# **app_sessions_by_time_0**
> app_sessions_by_time_0(length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)

App Sessions by Time

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.  ### Components Used - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"sessions\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.SessionAnalyticsApi(api_client)
    length = '14' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive. (optional)
    unit = 'day' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\").  (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app. (optional)
    segment_id = '{{segment_identifier}}' # str | (Optional) String  Segment API identifier indicating the analytics enabled segment for which sessions should be returned. (optional)

    try:
        # App Sessions by Time
        api_instance.app_sessions_by_time_0(length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)
    except Exception as e:
        print("Exception when calling SessionAnalyticsApi->app_sessions_by_time_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive. | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;).  | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app. | [optional] 
 **segment_id** | **str**| (Optional) String  Segment API identifier indicating the analytics enabled segment for which sessions should be returned. | [optional] 

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

