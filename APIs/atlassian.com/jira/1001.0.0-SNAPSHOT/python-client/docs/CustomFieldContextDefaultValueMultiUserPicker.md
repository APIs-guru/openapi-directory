# CustomFieldContextDefaultValueMultiUserPicker

The default value for a User Picker (multiple) custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[str]** | The IDs of the default users. | 
**context_id** | **str** | The ID of the context. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_multi_user_picker import CustomFieldContextDefaultValueMultiUserPicker

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueMultiUserPicker from a JSON string
custom_field_context_default_value_multi_user_picker_instance = CustomFieldContextDefaultValueMultiUserPicker.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueMultiUserPicker.to_json())

# convert the object into a dict
custom_field_context_default_value_multi_user_picker_dict = custom_field_context_default_value_multi_user_picker_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueMultiUserPicker from a dict
custom_field_context_default_value_multi_user_picker_from_dict = CustomFieldContextDefaultValueMultiUserPicker.from_dict(custom_field_context_default_value_multi_user_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


