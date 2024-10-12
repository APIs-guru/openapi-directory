# CustomFieldContextDefaultValueForgeObjectField

The default value for a Forge object custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **object** | The default JSON object. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_object_field import CustomFieldContextDefaultValueForgeObjectField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeObjectField from a JSON string
custom_field_context_default_value_forge_object_field_instance = CustomFieldContextDefaultValueForgeObjectField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeObjectField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_object_field_dict = custom_field_context_default_value_forge_object_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeObjectField from a dict
custom_field_context_default_value_forge_object_field_from_dict = CustomFieldContextDefaultValueForgeObjectField.from_dict(custom_field_context_default_value_forge_object_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


