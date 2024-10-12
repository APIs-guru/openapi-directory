# openapi_client.OpenapiApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_open_api_spec**](OpenapiApi.md#get_open_api_spec) | **GET** /v1/openapi | Returns the openapi specification


# **get_open_api_spec**
> bytearray get_open_api_spec()

Returns the openapi specification

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OpenapiApi(api_client)

    try:
        # Returns the openapi specification
        api_response = api_instance.get_open_api_spec()
        print("The response of OpenapiApi->get_open_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenapiApi->get_open_api_spec: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the openapi specification file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

