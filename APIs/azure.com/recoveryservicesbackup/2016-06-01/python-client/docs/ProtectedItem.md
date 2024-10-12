# ProtectedItem

The base class for backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type associated with the backup item. | [optional] 
**last_recovery_point** | **datetime** | The timestamp when the most recent backup copy was created for this backup item. | [optional] 
**policy_id** | **str** | The ID of the backup policy associated with this backup item. | [optional] 
**protected_item_type** | **str** | The backup item type. | [optional] 
**source_resource_id** | **str** | The ID of the resource to be backed up. | [optional] 
**workload_type** | **str** | The workload type for this item. | [optional] 

## Example

```python
from openapi_client.models.protected_item import ProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItem from a JSON string
protected_item_instance = ProtectedItem.from_json(json)
# print the JSON string representation of the object
print(ProtectedItem.to_json())

# convert the object into a dict
protected_item_dict = protected_item_instance.to_dict()
# create an instance of ProtectedItem from a dict
protected_item_from_dict = ProtectedItem.from_dict(protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


