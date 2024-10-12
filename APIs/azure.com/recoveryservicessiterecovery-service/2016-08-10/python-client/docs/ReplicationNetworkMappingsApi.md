# openapi_client.ReplicationNetworkMappingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_network_mappings_create**](ReplicationNetworkMappingsApi.md#replication_network_mappings_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName} | Creates network mapping.
[**replication_network_mappings_delete**](ReplicationNetworkMappingsApi.md#replication_network_mappings_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName} | Delete network mapping.
[**replication_network_mappings_get**](ReplicationNetworkMappingsApi.md#replication_network_mappings_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName} | Gets network mapping by name.
[**replication_network_mappings_list**](ReplicationNetworkMappingsApi.md#replication_network_mappings_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworkMappings | Gets all the network mappings under a vault.
[**replication_network_mappings_list_by_replication_networks**](ReplicationNetworkMappingsApi.md#replication_network_mappings_list_by_replication_networks) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings | Gets all the network mappings under a network.
[**replication_network_mappings_update**](ReplicationNetworkMappingsApi.md#replication_network_mappings_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName} | Updates network mapping.


# **replication_network_mappings_create**
> NetworkMapping replication_network_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name, input)

Creates network mapping.

The operation to create an ASR network mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_network_mapping_input import CreateNetworkMappingInput
from openapi_client.models.network_mapping import NetworkMapping
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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Primary fabric name.
    network_name = 'network_name_example' # str | Primary network name.
    network_mapping_name = 'network_mapping_name_example' # str | Network mapping name.
    input = openapi_client.CreateNetworkMappingInput() # CreateNetworkMappingInput | Create network mapping input.

    try:
        # Creates network mapping.
        api_response = api_instance.replication_network_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name, input)
        print("The response of ReplicationNetworkMappingsApi->replication_network_mappings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Primary fabric name. | 
 **network_name** | **str**| Primary network name. | 
 **network_mapping_name** | **str**| Network mapping name. | 
 **input** | [**CreateNetworkMappingInput**](CreateNetworkMappingInput.md)| Create network mapping input. | 

### Return type

[**NetworkMapping**](NetworkMapping.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_network_mappings_delete**
> replication_network_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name)

Delete network mapping.

The operation to delete a network mapping.

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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Primary fabric name.
    network_name = 'network_name_example' # str | Primary network name.
    network_mapping_name = 'network_mapping_name_example' # str | ARM Resource Name for network mapping.

    try:
        # Delete network mapping.
        api_instance.replication_network_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Primary fabric name. | 
 **network_name** | **str**| Primary network name. | 
 **network_mapping_name** | **str**| ARM Resource Name for network mapping. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_network_mappings_get**
> NetworkMapping replication_network_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name)

Gets network mapping by name.

Gets the details of an ASR network mapping

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_mapping import NetworkMapping
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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Primary fabric name.
    network_name = 'network_name_example' # str | Primary network name.
    network_mapping_name = 'network_mapping_name_example' # str | Network mapping name.

    try:
        # Gets network mapping by name.
        api_response = api_instance.replication_network_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name)
        print("The response of ReplicationNetworkMappingsApi->replication_network_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Primary fabric name. | 
 **network_name** | **str**| Primary network name. | 
 **network_mapping_name** | **str**| Network mapping name. | 

### Return type

[**NetworkMapping**](NetworkMapping.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_network_mappings_list**
> NetworkMappingCollection replication_network_mappings_list(api_version, resource_name, resource_group_name, subscription_id)

Gets all the network mappings under a vault.

Lists all ASR network mappings in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_mapping_collection import NetworkMappingCollection
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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets all the network mappings under a vault.
        api_response = api_instance.replication_network_mappings_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationNetworkMappingsApi->replication_network_mappings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**NetworkMappingCollection**](NetworkMappingCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_network_mappings_list_by_replication_networks**
> NetworkMappingCollection replication_network_mappings_list_by_replication_networks(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name)

Gets all the network mappings under a network.

Lists all ASR network mappings for the specified network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_mapping_collection import NetworkMappingCollection
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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Primary fabric name.
    network_name = 'network_name_example' # str | Primary network name.

    try:
        # Gets all the network mappings under a network.
        api_response = api_instance.replication_network_mappings_list_by_replication_networks(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name)
        print("The response of ReplicationNetworkMappingsApi->replication_network_mappings_list_by_replication_networks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_list_by_replication_networks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Primary fabric name. | 
 **network_name** | **str**| Primary network name. | 

### Return type

[**NetworkMappingCollection**](NetworkMappingCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_network_mappings_update**
> NetworkMapping replication_network_mappings_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name, input)

Updates network mapping.

The operation to update an ASR network mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_mapping import NetworkMapping
from openapi_client.models.update_network_mapping_input import UpdateNetworkMappingInput
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
    api_instance = openapi_client.ReplicationNetworkMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Primary fabric name.
    network_name = 'network_name_example' # str | Primary network name.
    network_mapping_name = 'network_mapping_name_example' # str | Network mapping name.
    input = openapi_client.UpdateNetworkMappingInput() # UpdateNetworkMappingInput | Update network mapping input.

    try:
        # Updates network mapping.
        api_response = api_instance.replication_network_mappings_update(api_version, resource_name, resource_group_name, subscription_id, fabric_name, network_name, network_mapping_name, input)
        print("The response of ReplicationNetworkMappingsApi->replication_network_mappings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationNetworkMappingsApi->replication_network_mappings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Primary fabric name. | 
 **network_name** | **str**| Primary network name. | 
 **network_mapping_name** | **str**| Network mapping name. | 
 **input** | [**UpdateNetworkMappingInput**](UpdateNetworkMappingInput.md)| Update network mapping input. | 

### Return type

[**NetworkMapping**](NetworkMapping.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

