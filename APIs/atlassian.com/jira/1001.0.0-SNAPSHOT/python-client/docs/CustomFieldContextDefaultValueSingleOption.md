# CustomFieldContextDefaultValueSingleOption

The default value for a single select custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**option_id** | **str** | The ID of the default option. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_single_option import CustomFieldContextDefaultValueSingleOption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueSingleOption from a JSON string
custom_field_context_default_value_single_option_instance = CustomFieldContextDefaultValueSingleOption.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueSingleOption.to_json())

# convert the object into a dict
custom_field_context_default_value_single_option_dict = custom_field_context_default_value_single_option_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueSingleOption from a dict
custom_field_context_default_value_single_option_from_dict = CustomFieldContextDefaultValueSingleOption.from_dict(custom_field_context_default_value_single_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


