# CustomFieldContextDefaultValueTextField

The default text for a text custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The default text. The maximum length is 254 characters. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_text_field import CustomFieldContextDefaultValueTextField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueTextField from a JSON string
custom_field_context_default_value_text_field_instance = CustomFieldContextDefaultValueTextField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueTextField.to_json())

# convert the object into a dict
custom_field_context_default_value_text_field_dict = custom_field_context_default_value_text_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueTextField from a dict
custom_field_context_default_value_text_field_from_dict = CustomFieldContextDefaultValueTextField.from_dict(custom_field_context_default_value_text_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


