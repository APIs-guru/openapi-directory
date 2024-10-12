# ModifierGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_name** | **str** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deleted** | **bool** | Flag to indicate if the object is deleted. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**maximum_allowed** | **int** |  | [optional] 
**minimum_required** | **int** |  | [optional] 
**modifiers** | [**List[ModifierGroupModifiersInner]**](ModifierGroupModifiersInner.md) |  | [optional] 
**name** | **str** |  | [optional] 
**present_at_all_locations** | **bool** |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**selection_type** | **str** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.modifier_group import ModifierGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ModifierGroup from a JSON string
modifier_group_instance = ModifierGroup.from_json(json)
# print the JSON string representation of the object
print(ModifierGroup.to_json())

# convert the object into a dict
modifier_group_dict = modifier_group_instance.to_dict()
# create an instance of ModifierGroup from a dict
modifier_group_from_dict = ModifierGroup.from_dict(modifier_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


