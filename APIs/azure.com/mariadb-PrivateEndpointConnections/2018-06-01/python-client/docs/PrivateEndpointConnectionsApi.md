# openapi_client.PrivateEndpointConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_endpoint_connections_create_or_update**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_delete**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_get**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_list_by_server**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections | 
[**private_endpoint_connections_update_tags**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName} | Updates tags on private endpoint connection.


# **private_endpoint_connections_create_or_update**
> PrivateEndpointConnection private_endpoint_connections_create_or_update(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version, parameters)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | 

    try:
        api_response = api_instance.private_endpoint_connections_create_or_update(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version, parameters)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **private_endpoint_connection_name** | **str**|  | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 
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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_delete**
> private_endpoint_connections_delete(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.private_endpoint_connections_delete(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **private_endpoint_connection_name** | **str**|  | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**200** | Successfully deleted private endpoint connection. |  -  |
**202** | Accepted |  -  |
**204** | Private endpoint connection does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_get**
> PrivateEndpointConnection private_endpoint_connections_get(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | The name of the private endpoint connection.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.private_endpoint_connections_get(resource_group_name, server_name, private_endpoint_connection_name, subscription_id, api_version)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **private_endpoint_connection_name** | **str**| The name of the private endpoint connection. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_list_by_server**
> PrivateEndpointConnectionListResult private_endpoint_connections_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets all private endpoint connections on a server.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.private_endpoint_connections_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_update_tags**
> PrivateEndpointConnection private_endpoint_connections_update_tags(api_version, subscription_id, resource_group_name, server_name, private_endpoint_connection_name, parameters)

Updates tags on private endpoint connection.

Updates private endpoint connection with the specified tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_endpoint_connection import PrivateEndpointConnection
from openapi_client.models.tags_object import TagsObject
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
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | 
    parameters = openapi_client.TagsObject() # TagsObject | Parameters supplied to the Update private endpoint connection Tags operation.

    try:
        # Updates tags on private endpoint connection.
        api_response = api_instance.private_endpoint_connections_update_tags(api_version, subscription_id, resource_group_name, server_name, private_endpoint_connection_name, parameters)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **private_endpoint_connection_name** | **str**|  | 
 **parameters** | [**TagsObject**](TagsObject.md)| Parameters supplied to the Update private endpoint connection Tags operation. | 

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
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

