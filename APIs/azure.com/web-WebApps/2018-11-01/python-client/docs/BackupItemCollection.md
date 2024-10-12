# BackupItemCollection

Collection of backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[BackupItem]**](BackupItem.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.backup_item_collection import BackupItemCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BackupItemCollection from a JSON string
backup_item_collection_instance = BackupItemCollection.from_json(json)
# print the JSON string representation of the object
print(BackupItemCollection.to_json())

# convert the object into a dict
backup_item_collection_dict = backup_item_collection_instance.to_dict()
# create an instance of BackupItemCollection from a dict
backup_item_collection_from_dict = BackupItemCollection.from_dict(backup_item_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


