# CustomFieldContextDefaultValueTextArea

The default text for a text area custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The default text. The maximum length is 32767 characters. | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_text_area import CustomFieldContextDefaultValueTextArea

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueTextArea from a JSON string
custom_field_context_default_value_text_area_instance = CustomFieldContextDefaultValueTextArea.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueTextArea.to_json())

# convert the object into a dict
custom_field_context_default_value_text_area_dict = custom_field_context_default_value_text_area_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueTextArea from a dict
custom_field_context_default_value_text_area_from_dict = CustomFieldContextDefaultValueTextArea.from_dict(custom_field_context_default_value_text_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


