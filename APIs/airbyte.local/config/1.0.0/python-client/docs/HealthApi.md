# openapi_client.HealthApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_health_check**](HealthApi.md#get_health_check) | **GET** /v1/health | Health Check


# **get_health_check**
> HealthCheckRead get_health_check()

Health Check

### Example


```python
import openapi_client
from openapi_client.models.health_check_read import HealthCheckRead
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
    api_instance = openapi_client.HealthApi(api_client)

    try:
        # Health Check
        api_response = api_instance.get_health_check()
        print("The response of HealthApi->get_health_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->get_health_check: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheckRead**](HealthCheckRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

