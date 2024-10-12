# GroupItem

Group entity for Intune MAM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupProperties**](GroupProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_item import GroupItem

# TODO update the JSON string below
json = "{}"
# create an instance of GroupItem from a JSON string
group_item_instance = GroupItem.from_json(json)
# print the JSON string representation of the object
print(GroupItem.to_json())

# convert the object into a dict
group_item_dict = group_item_instance.to_dict()
# create an instance of GroupItem from a dict
group_item_from_dict = GroupItem.from_dict(group_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


