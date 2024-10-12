# StorageAccountProperties

Properties of a storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | [**StorageAccountAccessTier**](StorageAccountAccessTier.md) |  | [optional] 
**account_id** | **str** | Internal storage account ID, which is not visible to tenant. | [optional] [readonly] 
**account_status** | [**StorageAccountStatus**](StorageAccountStatus.md) |  | [optional] 
**account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 
**creation_time** | **str** | The creation date and time of storage account in UTC. | [optional] [readonly] 
**deleted_time** | **datetime** | The date-time when the storage account was deleted. | [optional] [readonly] 
**encryption** | [**StorageEncryption**](StorageEncryption.md) |  | [optional] 
**fault_domain** | **str** | The fault domain for the storage account. | [optional] [readonly] 
**health_state** | [**StorageAccountHealthState**](StorageAccountHealthState.md) |  | [optional] 
**primary_endpoints** | **object** | The URLs that are used to perform a retrieval of a public BLOB, queue, or table object. | [optional] [readonly] 
**primary_location** | **str** | The primary location for the storage account. | [optional] [readonly] 
**provisioning_state** | [**StorageAccountState**](StorageAccountState.md) |  | [optional] 
**status_of_primary** | [**LocationStatus**](LocationStatus.md) |  | [optional] 
**supports_https_traffic_only** | **bool** | Storage account supports https traffic only or not | [optional] [readonly] 
**tenant_resource_group_name** | **str** | The name of resource group under which the storage account locates. | [optional] [readonly] 
**tenant_storage_account_name** | **str** | Storage account name from tenant view. | [optional] [readonly] 
**tenant_subscription_id** | **str** | Subscription ID of the subscription under which the storage account locates. | [optional] [readonly] 
**tenant_view_id** | **str** | Resource URI of storage account from tenant view. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_properties import StorageAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountProperties from a JSON string
storage_account_properties_instance = StorageAccountProperties.from_json(json)
# print the JSON string representation of the object
print(StorageAccountProperties.to_json())

# convert the object into a dict
storage_account_properties_dict = storage_account_properties_instance.to_dict()
# create an instance of StorageAccountProperties from a dict
storage_account_properties_from_dict = StorageAccountProperties.from_dict(storage_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


