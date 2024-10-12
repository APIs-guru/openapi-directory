# openapi_client.BackendReconnectApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backend_reconnect**](BackendReconnectApi.md#backend_reconnect) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/backends/{backendId}/reconnect | 


# **backend_reconnect**
> backend_reconnect(resource_group_name, service_name, backend_id, api_version, subscription_id, parameters=parameters)



Notifies the APIM proxy to create a new connection to the backend after the specified timeout. If no timeout was specified, timeout of 2 minutes is used.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backend_reconnect_request import BackendReconnectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BackendReconnectApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    backend_id = 'backend_id_example' # str | Identifier of the Backend entity. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.BackendReconnectRequest() # BackendReconnectRequest | Reconnect request parameters. (optional)

    try:
        api_instance.backend_reconnect(resource_group_name, service_name, backend_id, api_version, subscription_id, parameters=parameters)
    except Exception as e:
        print("Exception when calling BackendReconnectApi->backend_reconnect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **backend_id** | **str**| Identifier of the Backend entity. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**BackendReconnectRequest**](BackendReconnectRequest.md)| Reconnect request parameters. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Reconnect request accepted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

