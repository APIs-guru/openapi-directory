# CustomFieldContextDefaultValueForgeMultiGroupField

The default value for a Forge collection of groups custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**group_ids** | **List[str]** | The IDs of the default groups. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_multi_group_field import CustomFieldContextDefaultValueForgeMultiGroupField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeMultiGroupField from a JSON string
custom_field_context_default_value_forge_multi_group_field_instance = CustomFieldContextDefaultValueForgeMultiGroupField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeMultiGroupField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_multi_group_field_dict = custom_field_context_default_value_forge_multi_group_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeMultiGroupField from a dict
custom_field_context_default_value_forge_multi_group_field_from_dict = CustomFieldContextDefaultValueForgeMultiGroupField.from_dict(custom_field_context_default_value_forge_multi_group_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


