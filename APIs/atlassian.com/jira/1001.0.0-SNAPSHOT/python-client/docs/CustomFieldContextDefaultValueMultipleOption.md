# CustomFieldContextDefaultValueMultipleOption

The default value for a multi-select custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**option_ids** | **List[str]** | The list of IDs of the default options. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_multiple_option import CustomFieldContextDefaultValueMultipleOption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueMultipleOption from a JSON string
custom_field_context_default_value_multiple_option_instance = CustomFieldContextDefaultValueMultipleOption.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueMultipleOption.to_json())

# convert the object into a dict
custom_field_context_default_value_multiple_option_dict = custom_field_context_default_value_multiple_option_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueMultipleOption from a dict
custom_field_context_default_value_multiple_option_from_dict = CustomFieldContextDefaultValueMultipleOption.from_dict(custom_field_context_default_value_multiple_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


