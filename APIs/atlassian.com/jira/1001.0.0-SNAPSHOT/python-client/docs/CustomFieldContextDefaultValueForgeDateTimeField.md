# CustomFieldContextDefaultValueForgeDateTimeField

The default value for a Forge date time custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**date_time** | **str** | The default date-time in ISO format. Ignored if &#x60;useCurrent&#x60; is true. | [optional] 
**type** | **str** |  | 
**use_current** | **bool** | Whether to use the current date. | [optional] [default to False]

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_date_time_field import CustomFieldContextDefaultValueForgeDateTimeField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeDateTimeField from a JSON string
custom_field_context_default_value_forge_date_time_field_instance = CustomFieldContextDefaultValueForgeDateTimeField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeDateTimeField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_date_time_field_dict = custom_field_context_default_value_forge_date_time_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeDateTimeField from a dict
custom_field_context_default_value_forge_date_time_field_from_dict = CustomFieldContextDefaultValueForgeDateTimeField.from_dict(custom_field_context_default_value_forge_date_time_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


