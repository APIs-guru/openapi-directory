# CustomFieldContextDefaultValueMultipleVersionPicker

The default value for a multiple version picker custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**version_ids** | **List[str]** | The IDs of the default versions. | 
**version_order** | **str** | The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are &#x60;\&quot;releasedFirst\&quot;&#x60; and &#x60;\&quot;unreleasedFirst\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_default_value_multiple_version_picker import CustomFieldContextDefaultValueMultipleVersionPicker

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueMultipleVersionPicker from a JSON string
custom_field_context_default_value_multiple_version_picker_instance = CustomFieldContextDefaultValueMultipleVersionPicker.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueMultipleVersionPicker.to_json())

# convert the object into a dict
custom_field_context_default_value_multiple_version_picker_dict = custom_field_context_default_value_multiple_version_picker_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueMultipleVersionPicker from a dict
custom_field_context_default_value_multiple_version_picker_from_dict = CustomFieldContextDefaultValueMultipleVersionPicker.from_dict(custom_field_context_default_value_multiple_version_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


