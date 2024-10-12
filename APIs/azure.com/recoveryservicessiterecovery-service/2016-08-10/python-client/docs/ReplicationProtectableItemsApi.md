# openapi_client.ReplicationProtectableItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_protectable_items_get**](ReplicationProtectableItemsApi.md#replication_protectable_items_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems/{protectableItemName} | Gets the details of a protectable item.
[**replication_protectable_items_list_by_replication_protection_containers**](ReplicationProtectableItemsApi.md#replication_protectable_items_list_by_replication_protection_containers) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems | Gets the list of protectable items.


# **replication_protectable_items_get**
> ProtectableItem replication_protectable_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, protectable_item_name)

Gets the details of a protectable item.

The operation to get the details of a protectable item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protectable_item import ProtectableItem
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
    api_instance = openapi_client.ReplicationProtectableItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    protectable_item_name = 'protectable_item_name_example' # str | Protectable item name.

    try:
        # Gets the details of a protectable item.
        api_response = api_instance.replication_protectable_items_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, protectable_item_name)
        print("The response of ReplicationProtectableItemsApi->replication_protectable_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectableItemsApi->replication_protectable_items_get: %s\n" % e)
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
 **protectable_item_name** | **str**| Protectable item name. | 

### Return type

[**ProtectableItem**](ProtectableItem.md)

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

# **replication_protectable_items_list_by_replication_protection_containers**
> ProtectableItemCollection replication_protectable_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Gets the list of protectable items.

Lists the protectable items in a protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protectable_item_collection import ProtectableItemCollection
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
    api_instance = openapi_client.ReplicationProtectableItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.

    try:
        # Gets the list of protectable items.
        api_response = api_instance.replication_protectable_items_list_by_replication_protection_containers(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
        print("The response of ReplicationProtectableItemsApi->replication_protectable_items_list_by_replication_protection_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectableItemsApi->replication_protectable_items_list_by_replication_protection_containers: %s\n" % e)
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

[**ProtectableItemCollection**](ProtectableItemCollection.md)

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

