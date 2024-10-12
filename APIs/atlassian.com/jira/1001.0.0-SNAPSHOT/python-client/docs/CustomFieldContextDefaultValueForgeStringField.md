# CustomFieldContextDefaultValueForgeStringField

The default text for a Forge string custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**text** | **str** | The default text. The maximum length is 254 characters. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_string_field import CustomFieldContextDefaultValueForgeStringField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeStringField from a JSON string
custom_field_context_default_value_forge_string_field_instance = CustomFieldContextDefaultValueForgeStringField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeStringField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_string_field_dict = custom_field_context_default_value_forge_string_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeStringField from a dict
custom_field_context_default_value_forge_string_field_from_dict = CustomFieldContextDefaultValueForgeStringField.from_dict(custom_field_context_default_value_forge_string_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


