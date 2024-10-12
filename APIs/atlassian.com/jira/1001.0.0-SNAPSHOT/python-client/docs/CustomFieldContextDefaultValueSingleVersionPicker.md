# CustomFieldContextDefaultValueSingleVersionPicker

The default value for a version picker custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**version_id** | **str** | The ID of the default version. | 
**version_order** | **str** | The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are &#x60;\&quot;releasedFirst\&quot;&#x60; and &#x60;\&quot;unreleasedFirst\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_default_value_single_version_picker import CustomFieldContextDefaultValueSingleVersionPicker

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueSingleVersionPicker from a JSON string
custom_field_context_default_value_single_version_picker_instance = CustomFieldContextDefaultValueSingleVersionPicker.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueSingleVersionPicker.to_json())

# convert the object into a dict
custom_field_context_default_value_single_version_picker_dict = custom_field_context_default_value_single_version_picker_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueSingleVersionPicker from a dict
custom_field_context_default_value_single_version_picker_from_dict = CustomFieldContextDefaultValueSingleVersionPicker.from_dict(custom_field_context_default_value_single_version_picker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


