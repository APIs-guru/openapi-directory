# ModifierGroupModifiersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_name** | **str** |  | [optional] 
**available** | **bool** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**price_amount** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.modifier_group_modifiers_inner import ModifierGroupModifiersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ModifierGroupModifiersInner from a JSON string
modifier_group_modifiers_inner_instance = ModifierGroupModifiersInner.from_json(json)
# print the JSON string representation of the object
print(ModifierGroupModifiersInner.to_json())

# convert the object into a dict
modifier_group_modifiers_inner_dict = modifier_group_modifiers_inner_instance.to_dict()
# create an instance of ModifierGroupModifiersInner from a dict
modifier_group_modifiers_inner_from_dict = ModifierGroupModifiersInner.from_dict(modifier_group_modifiers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


