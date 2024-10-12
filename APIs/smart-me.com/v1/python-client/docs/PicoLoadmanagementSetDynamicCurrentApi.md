# openapi_client.PicoLoadmanagementSetDynamicCurrentApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pico_loadmanagement_set_dynamic_current_post**](PicoLoadmanagementSetDynamicCurrentApi.md#pico_loadmanagement_set_dynamic_current_post) | **POST** /api/pico/loadmanagementgroup/current/{serial} | Sets the dynamic current of a load management group or a single station.


# **pico_loadmanagement_set_dynamic_current_post**
> object pico_loadmanagement_set_dynamic_current_post(serial, current)

Sets the dynamic current of a load management group or a single station.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.PicoLoadmanagementSetDynamicCurrentApi(api_client)
    serial = 56 # int | The serial number can be any pico serial in the group (e.g. 700001)
    current = 56 # int | The dynamic current of the group (in mA)

    try:
        # Sets the dynamic current of a load management group or a single station.
        api_response = api_instance.pico_loadmanagement_set_dynamic_current_post(serial, current)
        print("The response of PicoLoadmanagementSetDynamicCurrentApi->pico_loadmanagement_set_dynamic_current_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoLoadmanagementSetDynamicCurrentApi->pico_loadmanagement_set_dynamic_current_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **int**| The serial number can be any pico serial in the group (e.g. 700001) | 
 **current** | **int**| The dynamic current of the group (in mA) | 

### Return type

**object**

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

