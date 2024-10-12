# CustomFieldContextDefaultValueForgeGroupField

The default value for a Forge group custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**group_id** | **str** | The ID of the the default group. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_group_field import CustomFieldContextDefaultValueForgeGroupField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeGroupField from a JSON string
custom_field_context_default_value_forge_group_field_instance = CustomFieldContextDefaultValueForgeGroupField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeGroupField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_group_field_dict = custom_field_context_default_value_forge_group_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeGroupField from a dict
custom_field_context_default_value_forge_group_field_from_dict = CustomFieldContextDefaultValueForgeGroupField.from_dict(custom_field_context_default_value_forge_group_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


