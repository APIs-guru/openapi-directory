# openapi_client.AppsApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_get**](AppsApi.md#apps_get) | **GET** /apps | 
[**apps_id_get**](AppsApi.md#apps_id_get) | **GET** /apps/{ID} | 


# **apps_get**
> EndpointGetApps apps_get(offset=offset, limit=limit)



Fetch all Daniapps that are currently in production mode.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_apps import EndpointGetApps
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.apps_get(offset=offset, limit=limit)
        print("The response of AppsApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetApps**](EndpointGetApps.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_id_get**
> EndpointGetAppsID apps_id_get(id)



Fetch an array of Daniapps that are currently in production mode.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_apps_id import EndpointGetAppsID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.apps_id_get(id)
        print("The response of AppsApi->apps_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetAppsID**](EndpointGetAppsID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

