# openapi_client.ValuesInPastMultipleApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**values_in_past_multiple_get**](ValuesInPastMultipleApi.md#values_in_past_multiple_get) | **GET** /api/ValuesInPastMultiple/{id} | Gets multiple values of a device. This call needs a smart-me professional licence.


# **values_in_past_multiple_get**
> List[ValuesData] values_in_past_multiple_get(id, start_date, end_date, interval)

Gets multiple values of a device. This call needs a smart-me professional licence.

### Example


```python
import openapi_client
from openapi_client.models.values_data import ValuesData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ValuesInPastMultipleApi(api_client)
    id = 'id_example' # str | The ID of the device
    start_date = '2013-10-20T19:20:30+01:00' # datetime | The date when the first value should start
    end_date = '2013-10-20T19:20:30+01:00' # datetime | The date when the last value should start
    interval = 56 # int | The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call.

    try:
        # Gets multiple values of a device. This call needs a smart-me professional licence.
        api_response = api_instance.values_in_past_multiple_get(id, start_date, end_date, interval)
        print("The response of ValuesInPastMultipleApi->values_in_past_multiple_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValuesInPastMultipleApi->values_in_past_multiple_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 
 **start_date** | **datetime**| The date when the first value should start | 
 **end_date** | **datetime**| The date when the last value should start | 
 **interval** | **int**| The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call. | 

### Return type

[**List[ValuesData]**](ValuesData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

