# openapi_client.PrivateEndpointConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_endpoint_connections_delete**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_get**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName} | 
[**private_endpoint_connections_put**](PrivateEndpointConnectionsApi.md#private_endpoint_connections_put) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName} | 


# **private_endpoint_connections_delete**
> PrivateEndpointConnection private_endpoint_connections_delete(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version)



Deletes the specified private endpoint connection associated with the key vault.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the key vault.
    vault_name = 'vault_name_example' # str | The name of the key vault.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Name of the private endpoint connection associated with the key vault.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.private_endpoint_connections_delete(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group that contains the key vault. | 
 **vault_name** | **str**| The name of the key vault. | 
 **private_endpoint_connection_name** | **str**| Name of the private endpoint connection associated with the key vault. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The private endpoint connection was successfully deleted. |  -  |
**202** | The private endpoint connection is being deleted. |  * Retry-After - The recommended number of seconds to wait before calling the URI specified in the location header. <br>  * Location - The URI to poll for completion status. <br>  |
**204** | The private endpoint connection does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_get**
> PrivateEndpointConnection private_endpoint_connections_get(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version)



Gets the specified private endpoint connection associated with the key vault.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the key vault.
    vault_name = 'vault_name_example' # str | The name of the key vault.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Name of the private endpoint connection associated with the key vault.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.private_endpoint_connections_get(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group that contains the key vault. | 
 **vault_name** | **str**| The name of the key vault. | 
 **private_endpoint_connection_name** | **str**| Name of the private endpoint connection associated with the key vault. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Private endpoint connection successfully returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_endpoint_connections_put**
> PrivateEndpointConnection private_endpoint_connections_put(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version, properties)



Updates the specified private endpoint connection associated with the key vault.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateEndpointConnectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the key vault.
    vault_name = 'vault_name_example' # str | The name of the key vault.
    private_endpoint_connection_name = 'private_endpoint_connection_name_example' # str | Name of the private endpoint connection associated with the key vault.
    api_version = 'api_version_example' # str | Client Api Version.
    properties = openapi_client.PrivateEndpointConnection() # PrivateEndpointConnection | The intended state of private endpoint connection.

    try:
        api_response = api_instance.private_endpoint_connections_put(subscription_id, resource_group_name, vault_name, private_endpoint_connection_name, api_version, properties)
        print("The response of PrivateEndpointConnectionsApi->private_endpoint_connections_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateEndpointConnectionsApi->private_endpoint_connections_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group that contains the key vault. | 
 **vault_name** | **str**| The name of the key vault. | 
 **private_endpoint_connection_name** | **str**| Name of the private endpoint connection associated with the key vault. | 
 **api_version** | **str**| Client Api Version. | 
 **properties** | [**PrivateEndpointConnection**](PrivateEndpointConnection.md)| The intended state of private endpoint connection. | 

### Return type

[**PrivateEndpointConnection**](PrivateEndpointConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The state of private endpoint connection was updated successfully. |  * Retry-After - The recommended number of seconds to wait before calling the URI specified in the location header. <br>  * Azure-AsyncOperation - (specified only if operation does not finish synchronously) The URI to poll for completion status. The response of this URI may be synchronous or asynchronous. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

