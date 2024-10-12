# openapi_client.EventsApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_api_get_list**](EventsApi.md#event_api_get_list) | **GET** /api/v1/events | Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.


# **event_api_get_list**
> object event_api_get_list(min_date=min_date, max_date=max_date, page=page, page_size=page_size, type_id=type_id, order_id=order_id)

Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    min_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the oldest date to include in the response (optional)
    max_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the newest date to include in the response (optional)
    page = 56 # int | Specifies the page to request (optional)
    page_size = 56 # int | Specifies the pagesize. Defaults to 50, max value is 250 (optional)
    type_id = [56] # List[int] | Filter for specific event types (optional)
    order_id = 56 # int | Filter for specific order id (optional)

    try:
        # Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.
        api_response = api_instance.event_api_get_list(min_date=min_date, max_date=max_date, page=page, page_size=page_size, type_id=type_id, order_id=order_id)
        print("The response of EventsApi->event_api_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->event_api_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **min_date** | **datetime**| Specifies the oldest date to include in the response | [optional] 
 **max_date** | **datetime**| Specifies the newest date to include in the response | [optional] 
 **page** | **int**| Specifies the page to request | [optional] 
 **page_size** | **int**| Specifies the pagesize. Defaults to 50, max value is 250 | [optional] 
 **type_id** | [**List[int]**](int.md)| Filter for specific event types | [optional] 
 **order_id** | **int**| Filter for specific order id | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

