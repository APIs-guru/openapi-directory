# openapi_client.HealthApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health**](HealthApi.md#health) | **GET** /health | Return current Otoroshi health


# **health**
> OtoroshiHealth health()

Return current Otoroshi health

Import the full state of Otoroshi as a file

### Example


```python
import openapi_client
from openapi_client.models.otoroshi_health import OtoroshiHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HealthApi(api_client)

    try:
        # Return current Otoroshi health
        api_response = api_instance.health()
        print("The response of HealthApi->health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->health: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OtoroshiHealth**](OtoroshiHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

