# openapi_client.HealthcheckApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_health_check**](HealthcheckApi.md#get_health_check) | **GET** /Healthcheck | Get health check status


# **get_health_check**
> HealthCheck get_health_check()

Get health check status

Returns the health status of the application

### Example


```python
import openapi_client
from openapi_client.models.health_check import HealthCheck
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthcheckApi(api_client)

    try:
        # Get health check status
        api_response = api_instance.get_health_check()
        print("The response of HealthcheckApi->get_health_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthcheckApi->get_health_check: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheck**](HealthCheck.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The health check object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

