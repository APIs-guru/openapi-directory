# openapi_client.WorkspacePrivateEndpointConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_endpoint_connections_delete**](WorkspacePrivateEndpointConnectionsApi.md#private_endpoint_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_get**](WorkspacePrivateEndpointConnectionsApi.md#private_endpoint_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_put**](WorkspacePrivateEndpointConnectionsApi.md#private_endpoint_connections_put) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName} | 


# **private_endpoint_connections_delete**
> private_endpoint_connections_delete(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version)



Deletes the specified private endpoint connection associated with the workspace.

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
    api_instance = openapi_client.WorkspacePrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection associated with the workspace
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_instance.private_endpoint_connections_delete(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version)
    except Exception as e:
        print("Exception when calling WorkspacePrivateEndpointConnectionsApi->private_endpoint_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection associated with the workspace | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Delete the private endpoint connection successfully. |  -  |
**204** | No Content -- The private endpoint connection does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_get**
> PrivateEndpointConnection private_endpoint_connections_get(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version)



Gets the specified private endpoint connection associated with the workspace.

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
    api_instance = openapi_client.WorkspacePrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection associated with the workspace
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.

    try:
        api_response = api_instance.private_endpoint_connections_get(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version)
        print("The response of WorkspacePrivateEndpointConnectionsApi->private_endpoint_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacePrivateEndpointConnectionsApi->private_endpoint_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection associated with the workspace | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 

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
**200** | OK -- Get the private endpoint connection properties successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_put**
> PrivateEndpointConnection private_endpoint_connections_put(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version, properties)



Update the state of specified private endpoint connection associated with the workspace.

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
    api_instance = openapi_client.WorkspacePrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which workspace is located.
    workspace_name = 'workspace_name_example' # str | Name of Azure Machine Learning workspace.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection associated with the workspace
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    properties = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | The private endpoint connection properties.

    try:
        api_response = api_instance.private_endpoint_connections_put(subscription_id, resource_group_name, workspace_name, private_endpoint_connection_name, api_version, properties)
        print("The response of WorkspacePrivateEndpointConnectionsApi->private_endpoint_connections_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacePrivateEndpointConnectionsApi->private_endpoint_connections_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Name of the resource group in which workspace is located. | 
 **workspace_name** | **str**| Name of Azure Machine Learning workspace. | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection associated with the workspace | 
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **properties** | [**PrivateEndpointConnection**](PrivateEndpointConnection.md)| The private endpoint connection properties. | 

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
**200** | OK -- Update the private endpoint connection properties successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

