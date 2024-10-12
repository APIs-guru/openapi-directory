# CustomFieldContextSingleUserPickerDefaults

Defaults for a User Picker (single) custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the default user. | 
**context_id** | **str** | The ID of the context. | 
**type** | **str** |  | 
**user_filter** | [**UserFilter**](UserFilter.md) |  | 

## Example

```python
from openapi_client.models.custom_field_context_single_user_picker_defaults import CustomFieldContextSingleUserPickerDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextSingleUserPickerDefaults from a JSON string
custom_field_context_single_user_picker_defaults_instance = CustomFieldContextSingleUserPickerDefaults.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextSingleUserPickerDefaults.to_json())

# convert the object into a dict
custom_field_context_single_user_picker_defaults_dict = custom_field_context_single_user_picker_defaults_instance.to_dict()
# create an instance of CustomFieldContextSingleUserPickerDefaults from a dict
custom_field_context_single_user_picker_defaults_from_dict = CustomFieldContextSingleUserPickerDefaults.from_dict(custom_field_context_single_user_picker_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


