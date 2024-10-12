# openapi_client.HealthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_api_v1_health_get**](HealthApi.md#health_api_v1_health_get) | **GET** /api/v1/health/ | Health


# **health_api_v1_health_get**
> health_api_v1_health_get(idempotency_key=idempotency_key)

Health

Verify the API server is up and running.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Health
        api_instance.health_api_v1_health_get(idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling HealthApi->health_api_v1_health_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

