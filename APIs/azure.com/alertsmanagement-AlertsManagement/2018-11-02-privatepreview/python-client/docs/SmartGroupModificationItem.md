# SmartGroupModificationItem

smartGroup modification item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Modification comments | [optional] 
**description** | **str** | Description of the modification | [optional] 
**modification_event** | **str** | Reason for the modification | [optional] 
**modified_at** | **str** | Modified date and time | [optional] 
**modified_by** | **str** | Modified user details (Principal client name) | [optional] 
**new_value** | **str** | New value | [optional] 
**old_value** | **str** | Old value | [optional] 

## Example

```python
from openapi_client.models.smart_group_modification_item import SmartGroupModificationItem

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupModificationItem from a JSON string
smart_group_modification_item_instance = SmartGroupModificationItem.from_json(json)
# print the JSON string representation of the object
print(SmartGroupModificationItem.to_json())

# convert the object into a dict
smart_group_modification_item_dict = smart_group_modification_item_instance.to_dict()
# create an instance of SmartGroupModificationItem from a dict
smart_group_modification_item_from_dict = SmartGroupModificationItem.from_dict(smart_group_modification_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


