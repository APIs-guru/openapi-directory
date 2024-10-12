# DeletedStorageBundle

A deleted storage account bundle consisting of its previous id, attributes and its tags, as well as information on when it will be purged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the storage account was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted storage account. | [optional] 
**scheduled_purge_date** | **int** | The time when the storage account is scheduled to be purged, in UTC | [optional] [readonly] 
**active_key_name** | **str** | The current active storage account key name. | [optional] [readonly] 
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**auto_regenerate_key** | **bool** | whether keyvault should manage the storage account for the user. | [optional] [readonly] 
**id** | **str** | The storage account id. | [optional] [readonly] 
**regeneration_period** | **str** | The key regeneration time duration specified in ISO-8601 format. | [optional] [readonly] 
**resource_id** | **str** | The storage account resource id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_storage_bundle import DeletedStorageBundle

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedStorageBundle from a JSON string
deleted_storage_bundle_instance = DeletedStorageBundle.from_json(json)
# print the JSON string representation of the object
print(DeletedStorageBundle.to_json())

# convert the object into a dict
deleted_storage_bundle_dict = deleted_storage_bundle_instance.to_dict()
# create an instance of DeletedStorageBundle from a dict
deleted_storage_bundle_from_dict = DeletedStorageBundle.from_dict(deleted_storage_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


