# openapi_client.PrivateEndpointConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_endpoint_connections_create_or_update**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_delete**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_get**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_list_by_private_link_scope**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_list_by_private_link_scope) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections | 


# **private_endpoint_connections_create_or_update**
> PrivateEndpointConnection private_endpoint_connections_create_or_update(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name, parameters)



Approve or reject a private endpoint connection with a given name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_endpoint_connection import PrivateEndpointConnection
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
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection.
    parameters = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | 

    try:
        api_response = api_instance.private_endpoint_connections_create_or_update(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name, parameters)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection. | 
 **parameters** | [**PrivateEndpointConnection**](PrivateEndpointConnection.md)|  | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully approved or rejected private endpoint connection. |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_delete**
> private_endpoint_connections_delete(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name)



Deletes a private endpoint connection with a given name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection.

    try:
        api_instance.private_endpoint_connections_delete(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted private endpoint connection. |  -  |
**202** | Accepted |  -  |
**204** | Private endpoint connection does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_get**
> PrivateEndpointConnection private_endpoint_connections_get(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name)



Gets a private endpoint connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_endpoint_connection import PrivateEndpointConnection
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
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection.

    try:
        api_response = api_instance.private_endpoint_connections_get(subscription_id, resource_group_name, api_version, scope_name, private_endpoint_connection_name)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection. | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a specified private endpoint connection. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_list_by_private_link_scope**
> PrivateEndpointConnectionListResult private_endpoint_connections_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)



Gets all private endpoint connections on a private link scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_endpoint_connection_list_result import PrivateEndpointConnectionListResult
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
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource

    try:
        api_response = api_instance.private_endpoint_connections_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_private_link_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_private_link_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 

### Return type

[**PrivateEndpointConnectionListResult**](PrivateEndpointConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved private endpoint connections. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

