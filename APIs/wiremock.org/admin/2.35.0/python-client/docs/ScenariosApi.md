# openapi_client.ScenariosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_scenarios_get**](ScenariosApi.md#admin_scenarios_get) | **GET** /__admin/scenarios | Get all scenarios
[**admin_scenarios_reset_post**](ScenariosApi.md#admin_scenarios_reset_post) | **POST** /__admin/scenarios/reset | Reset the state of all scenarios


# **admin_scenarios_get**
> AdminScenariosGet200Response admin_scenarios_get()

Get all scenarios

### Example


```python
import openapi_client
from openapi_client.models.admin_scenarios_get200_response import AdminScenariosGet200Response
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
    api_instance = openapi_client.ScenariosApi(api_client)

    try:
        # Get all scenarios
        api_response = api_instance.admin_scenarios_get()
        print("The response of ScenariosApi->admin_scenarios_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScenariosApi->admin_scenarios_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AdminScenariosGet200Response**](AdminScenariosGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All scenarios |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_scenarios_reset_post**
> admin_scenarios_reset_post()

Reset the state of all scenarios

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
    api_instance = openapi_client.ScenariosApi(api_client)

    try:
        # Reset the state of all scenarios
        api_instance.admin_scenarios_reset_post()
    except Exception as e:
        print("Exception when calling ScenariosApi->admin_scenarios_reset_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully reset |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

