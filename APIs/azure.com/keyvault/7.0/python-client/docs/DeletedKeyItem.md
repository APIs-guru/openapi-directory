# DeletedKeyItem

The deleted key item containing the deleted key metadata and information about deletion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the key was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted key. | [optional] 
**scheduled_purge_date** | **int** | The time when the key is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**kid** | **str** | Key identifier. | [optional] 
**managed** | **bool** | True if the key&#39;s lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.deleted_key_item import DeletedKeyItem

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedKeyItem from a JSON string
deleted_key_item_instance = DeletedKeyItem.from_json(json)
# print the JSON string representation of the object
print(DeletedKeyItem.to_json())

# convert the object into a dict
deleted_key_item_dict = deleted_key_item_instance.to_dict()
# create an instance of DeletedKeyItem from a dict
deleted_key_item_from_dict = DeletedKeyItem.from_dict(deleted_key_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


