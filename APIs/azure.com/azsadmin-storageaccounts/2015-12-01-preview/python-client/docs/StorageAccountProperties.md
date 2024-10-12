# StorageAccountProperties

Properties of a storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Internal storage account ID, which is not visible to tenant. | [optional] [readonly] 
**account_status** | [**StorageAccountStatus**](StorageAccountStatus.md) |  | [optional] 
**account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 
**acquisition_operation_count** | **int** | The count of acquisitions in the storage account. | [optional] [readonly] 
**alternate_name** | **str** | Alternative storage account name being used during undelete operation. | [optional] [readonly] 
**creation_time** | **str** | The creation date and time of storage account in UTC. | [optional] [readonly] 
**current_operation** | [**StorageAccountOperation**](StorageAccountOperation.md) |  | [optional] 
**custom_domain** | **str** | The custom domain the user assigned to this storage account. | [optional] [readonly] 
**deleted_time** | **datetime** | The date-time when the storage account was deleted. | [optional] [readonly] 
**permissions** | [**WacAccountPermissions**](WacAccountPermissions.md) |  | [optional] 
**primary_endpoints** | **object** | The URLs that are used to perform a retrieval of a public BLOB, queue, or table object. | [optional] [readonly] 
**primary_location** | **str** | The primary location for the storage account. | [optional] [readonly] 
**provisioning_state** | [**StorageAccountState**](StorageAccountState.md) |  | [optional] 
**recovered_time** | **datetime** | The time when the storage account is undeleted. | [optional] [readonly] 
**recycled_time** | **datetime** | The time when the storage account is physically deleted. | [optional] [readonly] 
**resource_admin_api_version** | **str** | Storage admin REST API version. | [optional] [readonly] 
**status_of_primary** | [**LocationStatus**](LocationStatus.md) |  | [optional] 
**tenant_resource_group_name** | **str** | The name of resource group under which the storage account locates. | [optional] [readonly] 
**tenant_storage_account_name** | **str** | Storage account name from tenant view. | [optional] [readonly] 
**tenant_subscription_id** | **str** | Subscription ID of the subscription under which the storage account locates. | [optional] [readonly] 
**tenant_view_id** | **str** | Resource URI of storage account from tenant view. | [optional] [readonly] 
**wac_internal_state** | [**WacAccountStates**](WacAccountStates.md) |  | [optional] 

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


