# openapi_client.PicoApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pico_get**](PicoApi.md#pico_get) | **GET** /api/pico | Gets all pico charging stations for this user


# **pico_get**
> List[Device] pico_get()

Gets all pico charging stations for this user

### Example


```python
import openapi_client
from openapi_client.models.device import Device
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
    api_instance = openapi_client.PicoApi(api_client)

    try:
        # Gets all pico charging stations for this user
        api_response = api_instance.pico_get()
        print("The response of PicoApi->pico_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoApi->pico_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Device]**](Device.md)

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

