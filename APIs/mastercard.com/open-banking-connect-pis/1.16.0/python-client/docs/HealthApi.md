# openapi_client.HealthApi

All URIs are relative to */openbanking/sandbox/connect/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_health_get**](HealthApi.md#payments_health_get) | **GET** /payments/health | Returns the status of each connectivity provider


# **payments_health_get**
> ApiHealth payments_health_get()

Returns the status of each connectivity provider

Returns the status of each connectivity provider

### Example


```python
import openapi_client
from openapi_client.models.api_health import ApiHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /openbanking/sandbox/connect/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/openbanking/sandbox/connect/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthApi(api_client)

    try:
        # Returns the status of each connectivity provider
        api_response = api_instance.payments_health_get()
        print("The response of HealthApi->payments_health_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->payments_health_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiHealth**](ApiHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**500** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

