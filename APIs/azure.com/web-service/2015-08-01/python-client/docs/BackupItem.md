# BackupItem

Backup description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.backup_item import BackupItem

# TODO update the JSON string below
json = "{}"
# create an instance of BackupItem from a JSON string
backup_item_instance = BackupItem.from_json(json)
# print the JSON string representation of the object
print(BackupItem.to_json())

# convert the object into a dict
backup_item_dict = backup_item_instance.to_dict()
# create an instance of BackupItem from a dict
backup_item_from_dict = BackupItem.from_dict(backup_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


