# openapi_client.PicoEnableFixCableLockApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pico_enable_fix_cable_lock_post**](PicoEnableFixCableLockApi.md#pico_enable_fix_cable_lock_post) | **POST** /api/pico/tryenablecablelock/{id} | Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.


# **pico_enable_fix_cable_lock_post**
> object pico_enable_fix_cable_lock_post(id)

Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

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
    api_instance = openapi_client.PicoEnableFixCableLockApi(api_client)
    id = 'id_example' # str | The ID of the pico

    try:
        # Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.
        api_response = api_instance.pico_enable_fix_cable_lock_post(id)
        print("The response of PicoEnableFixCableLockApi->pico_enable_fix_cable_lock_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoEnableFixCableLockApi->pico_enable_fix_cable_lock_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the pico | 

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

