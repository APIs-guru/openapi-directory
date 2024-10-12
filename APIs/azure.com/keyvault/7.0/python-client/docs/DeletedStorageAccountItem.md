# DeletedStorageAccountItem

The deleted storage account item containing metadata about the deleted storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the storage account was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted storage account. | [optional] 
**scheduled_purge_date** | **int** | The time when the storage account is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**id** | **str** | Storage identifier. | [optional] [readonly] 
**resource_id** | **str** | Storage account resource Id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_storage_account_item import DeletedStorageAccountItem

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedStorageAccountItem from a JSON string
deleted_storage_account_item_instance = DeletedStorageAccountItem.from_json(json)
# print the JSON string representation of the object
print(DeletedStorageAccountItem.to_json())

# convert the object into a dict
deleted_storage_account_item_dict = deleted_storage_account_item_instance.to_dict()
# create an instance of DeletedStorageAccountItem from a dict
deleted_storage_account_item_from_dict = DeletedStorageAccountItem.from_dict(deleted_storage_account_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


