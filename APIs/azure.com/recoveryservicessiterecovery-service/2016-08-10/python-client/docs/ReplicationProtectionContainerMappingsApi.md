# openapi_client.ReplicationProtectionContainerMappingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_protection_container_mappings_create**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName} | Create protection container mapping.
[**replication_protection_container_mappings_delete**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_delete) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}/remove | Remove protection container mapping.
[**replication_protection_container_mappings_get**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName} | Gets a protection container mapping/
[**replication_protection_container_mappings_list**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainerMappings | Gets the list of all protection container mappings in a vault.
[**replication_protection_container_mappings_list_by_replication_protection_containers**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_list_by_replication_protection_containers) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings | Gets the list of protection container mappings for a protection container.
[**replication_protection_container_mappings_purge**](ReplicationProtectionContainerMappingsApi.md#replication_protection_container_mappings_purge) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName} | Purge protection container mapping.


# **replication_protection_container_mappings_create**
> ProtectionContainerMapping replication_protection_container_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name, creation_input)

Create protection container mapping.

The operation to create a protection container mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_protection_container_mapping_input import CreateProtectionContainerMappingInput
from openapi_client.models.protection_container_mapping import ProtectionContainerMapping
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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    mapping_name = 'mapping_name_example' # str | Protection container mapping name.
    creation_input = openapi_client.CreateProtectionContainerMappingInput() # CreateProtectionContainerMappingInput | Mapping creation input.

    try:
        # Create protection container mapping.
        api_response = api_instance.replication_protection_container_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name, creation_input)
        print("The response of ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **mapping_name** | **str**| Protection container mapping name. | 
 **creation_input** | [**CreateProtectionContainerMappingInput**](CreateProtectionContainerMappingInput.md)| Mapping creation input. | 

### Return type

[**ProtectionContainerMapping**](ProtectionContainerMapping.md)

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

# **replication_protection_container_mappings_delete**
> replication_protection_container_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name, removal_input)

Remove protection container mapping.

The operation to delete or remove a protection container mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remove_protection_container_mapping_input import RemoveProtectionContainerMappingInput
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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    mapping_name = 'mapping_name_example' # str | Protection container mapping name.
    removal_input = openapi_client.RemoveProtectionContainerMappingInput() # RemoveProtectionContainerMappingInput | Removal input.

    try:
        # Remove protection container mapping.
        api_instance.replication_protection_container_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name, removal_input)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **mapping_name** | **str**| Protection container mapping name. | 
 **removal_input** | [**RemoveProtectionContainerMappingInput**](RemoveProtectionContainerMappingInput.md)| Removal input. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protection_container_mappings_get**
> ProtectionContainerMapping replication_protection_container_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name)

Gets a protection container mapping/

Gets the details of a protection container mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_mapping import ProtectionContainerMapping
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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    mapping_name = 'mapping_name_example' # str | Protection Container mapping name.

    try:
        # Gets a protection container mapping/
        api_response = api_instance.replication_protection_container_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name)
        print("The response of ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **mapping_name** | **str**| Protection Container mapping name. | 

### Return type

[**ProtectionContainerMapping**](ProtectionContainerMapping.md)

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

# **replication_protection_container_mappings_list**
> ProtectionContainerMappingCollection replication_protection_container_mappings_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of all protection container mappings in a vault.

Lists the protection container mappings in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_mapping_collection import ProtectionContainerMappingCollection
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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of all protection container mappings in a vault.
        api_response = api_instance.replication_protection_container_mappings_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**ProtectionContainerMappingCollection**](ProtectionContainerMappingCollection.md)

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

# **replication_protection_container_mappings_list_by_replication_protection_containers**
> ProtectionContainerMappingCollection replication_protection_container_mappings_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Gets the list of protection container mappings for a protection container.

Lists the protection container mappings for a protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_mapping_collection import ProtectionContainerMappingCollection
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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.

    try:
        # Gets the list of protection container mappings for a protection container.
        api_response = api_instance.replication_protection_container_mappings_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
        print("The response of ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_list_by_replication_protection_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_list_by_replication_protection_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 

### Return type

[**ProtectionContainerMappingCollection**](ProtectionContainerMappingCollection.md)

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

# **replication_protection_container_mappings_purge**
> replication_protection_container_mappings_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name)

Purge protection container mapping.

The operation to purge(force delete) a protection container mapping

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
    api_instance = openapi_client.ReplicationProtectionContainerMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    mapping_name = 'mapping_name_example' # str | Protection container mapping name.

    try:
        # Purge protection container mapping.
        api_instance.replication_protection_container_mappings_purge(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, mapping_name)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainerMappingsApi->replication_protection_container_mappings_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **mapping_name** | **str**| Protection container mapping name. | 

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

