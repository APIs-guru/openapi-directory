# openapi_client.DefaultApi

All URIs are relative to *https://api.trapstreet.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**address_get**](DefaultApi.md#address_get) | **GET** /{address} | 


# **address_get**
> AddressGet200Response address_get(address)



### Example


```python
import openapi_client
from openapi_client.models.address_get200_response import AddressGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trapstreet.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trapstreet.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    address = 'address_example' # str | 

    try:
        api_response = api_instance.address_get(address)
        print("The response of DefaultApi->address_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->address_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**|  | 

### Return type

[**AddressGet200Response**](AddressGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

