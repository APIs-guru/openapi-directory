# openapi_client.TestApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_get**](TestApi.md#test_get) | **GET** /api/Test | Get the all Test objects.             


# **test_get**
> TestDTO test_get()

Get the all Test objects.             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.test_dto import TestDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestApi(api_client)

    try:
        # Get the all Test objects.             
        api_response = api_instance.test_get()
        print("The response of TestApi->test_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestDTO**](TestDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with test objects as a list. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

