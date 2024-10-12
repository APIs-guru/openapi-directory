# CustomFieldContextDefaultValueForgeNumberField

Default value for a Forge number custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**number** | **float** | The default floating-point number. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_number_field import CustomFieldContextDefaultValueForgeNumberField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeNumberField from a JSON string
custom_field_context_default_value_forge_number_field_instance = CustomFieldContextDefaultValueForgeNumberField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeNumberField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_number_field_dict = custom_field_context_default_value_forge_number_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeNumberField from a dict
custom_field_context_default_value_forge_number_field_from_dict = CustomFieldContextDefaultValueForgeNumberField.from_dict(custom_field_context_default_value_forge_number_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


