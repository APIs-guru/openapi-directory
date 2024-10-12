# CustomFieldContextDefaultValueMultipleGroupPicker

The default value for a multiple group picker custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**group_ids** | **List[str]** | The IDs of the default groups. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_multiple_group_picker import CustomFieldContextDefaultValueMultipleGroupPicker

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueMultipleGroupPicker from a JSON string
custom_field_context_default_value_multiple_group_picker_instance = CustomFieldContextDefaultValueMultipleGroupPicker.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueMultipleGroupPicker.to_json())

# convert the object into a dict
custom_field_context_default_value_multiple_group_picker_dict = custom_field_context_default_value_multiple_group_picker_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueMultipleGroupPicker from a dict
custom_field_context_default_value_multiple_group_picker_from_dict = CustomFieldContextDefaultValueMultipleGroupPicker.from_dict(custom_field_context_default_value_multiple_group_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


