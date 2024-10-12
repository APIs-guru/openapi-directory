# CustomFieldContextDefaultValueForgeMultiStringField

The default text for a Forge collection of strings custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**values** | **List[str]** | List of string values. The maximum length for a value is 254 characters. | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_multi_string_field import CustomFieldContextDefaultValueForgeMultiStringField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeMultiStringField from a JSON string
custom_field_context_default_value_forge_multi_string_field_instance = CustomFieldContextDefaultValueForgeMultiStringField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeMultiStringField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_multi_string_field_dict = custom_field_context_default_value_forge_multi_string_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeMultiStringField from a dict
custom_field_context_default_value_forge_multi_string_field_from_dict = CustomFieldContextDefaultValueForgeMultiStringField.from_dict(custom_field_context_default_value_forge_multi_string_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


