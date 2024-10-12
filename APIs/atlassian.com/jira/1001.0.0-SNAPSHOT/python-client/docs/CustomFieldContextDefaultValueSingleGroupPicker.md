# CustomFieldContextDefaultValueSingleGroupPicker

The default value for a group picker custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**group_id** | **str** | The ID of the the default group. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_single_group_picker import CustomFieldContextDefaultValueSingleGroupPicker

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueSingleGroupPicker from a JSON string
custom_field_context_default_value_single_group_picker_instance = CustomFieldContextDefaultValueSingleGroupPicker.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueSingleGroupPicker.to_json())

# convert the object into a dict
custom_field_context_default_value_single_group_picker_dict = custom_field_context_default_value_single_group_picker_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueSingleGroupPicker from a dict
custom_field_context_default_value_single_group_picker_from_dict = CustomFieldContextDefaultValueSingleGroupPicker.from_dict(custom_field_context_default_value_single_group_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


