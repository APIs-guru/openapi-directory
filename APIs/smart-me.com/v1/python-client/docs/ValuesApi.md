# openapi_client.ValuesApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**values_get**](ValuesApi.md#values_get) | **GET** /api/Values/{id} | Gets all (last) values of a device


# **values_get**
> ValuesData values_get(id)

Gets all (last) values of a device

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
    api_instance = openapi_client.ValuesApi(api_client)
    id = 'id_example' # str | The ID of the device

    try:
        # Gets all (last) values of a device
        api_response = api_instance.values_get(id)
        print("The response of ValuesApi->values_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ValuesApi->values_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the device | 

### Return type

[**ValuesData**](ValuesData.md)

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

