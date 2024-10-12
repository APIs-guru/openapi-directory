# CustomFieldContextDefaultValueLabels

Default value for a labels custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** | The default labels value. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_labels import CustomFieldContextDefaultValueLabels

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueLabels from a JSON string
custom_field_context_default_value_labels_instance = CustomFieldContextDefaultValueLabels.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueLabels.to_json())

# convert the object into a dict
custom_field_context_default_value_labels_dict = custom_field_context_default_value_labels_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueLabels from a dict
custom_field_context_default_value_labels_from_dict = CustomFieldContextDefaultValueLabels.from_dict(custom_field_context_default_value_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


