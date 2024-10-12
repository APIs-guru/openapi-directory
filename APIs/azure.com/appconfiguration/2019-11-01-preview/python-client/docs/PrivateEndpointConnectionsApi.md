# openapi_client.PrivateEndpointConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_endpoint_connections_create_or_update**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_delete**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_get**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_list_by_configuration_store**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_list_by_configuration_store) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections | 


# **private_endpoint_connections_create_or_update**
> PrivateEndpointConnection private_endpoint_connections_create_or_update(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name, private_endpoint_connection)



Update the state of the specified private endpoint connection associated with the configuration store.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Private endpoint connection name
    private_endpoint_connection = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | The private endpoint connection properties.

    try:
        api_response = api_instance.private_endpoint_connections_create_or_update(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name, private_endpoint_connection)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **private_endpoint_connection_name** | **str**| Private endpoint connection name | 
 **private_endpoint_connection** | [**PrivateEndpointConnection**](PrivateEndpointConnection.md)| The private endpoint connection properties. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**201** | The request was successfully accepted; the operation will complete asynchronously. The provisioning state of the resource should indicate the current state of the resource. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_delete**
> private_endpoint_connections_delete(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name)



Deletes a private endpoint connection.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Private endpoint connection name

    try:
        api_instance.private_endpoint_connections_delete(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **private_endpoint_connection_name** | **str**| Private endpoint connection name | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**202** | The request was successful; the operation will complete asynchronously. |  -  |
**204** | No Content - the specified resource was not found. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_get**
> PrivateEndpointConnection private_endpoint_connections_get(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name)



Gets the specified private endpoint connection associated with the configuration store.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Private endpoint connection name

    try:
        api_response = api_instance.private_endpoint_connections_get(subscription_id, resource_group_name, config_store_name, api_version, private_endpoint_connection_name)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **private_endpoint_connection_name** | **str**| Private endpoint connection name | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_list_by_configuration_store**
> PrivateEndpointConnectionListResult private_endpoint_connections_list_by_configuration_store(subscription_id, resource_group_name, config_store_name, api_version)



Lists all private endpoint connections for a configuration store.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.private_endpoint_connections_list_by_configuration_store(subscription_id, resource_group_name, config_store_name, api_version)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_configuration_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_list_by_configuration_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

