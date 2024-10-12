# openapi_client.ImplementationApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_implementation_read**](ImplementationApi.md#api_implementation_read) | **GET** /implementation | 


# **api_implementation_read**
> ImplementationResponse api_implementation_read()



Get the API implementation details.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.implementation_response import ImplementationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImplementationApi(api_client)

    try:
        api_response = api_instance.api_implementation_read()
        print("The response of ImplementationApi->api_implementation_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImplementationApi->api_implementation_read: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ImplementationResponse**](ImplementationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Implementation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

