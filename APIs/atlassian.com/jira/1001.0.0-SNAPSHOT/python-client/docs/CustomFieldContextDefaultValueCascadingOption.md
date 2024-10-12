# CustomFieldContextDefaultValueCascadingOption

The default value for a cascading select custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cascading_option_id** | **str** | The ID of the default cascading option. | [optional] 
**context_id** | **str** | The ID of the context. | 
**option_id** | **str** | The ID of the default option. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_cascading_option import CustomFieldContextDefaultValueCascadingOption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueCascadingOption from a JSON string
custom_field_context_default_value_cascading_option_instance = CustomFieldContextDefaultValueCascadingOption.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueCascadingOption.to_json())

# convert the object into a dict
custom_field_context_default_value_cascading_option_dict = custom_field_context_default_value_cascading_option_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueCascadingOption from a dict
custom_field_context_default_value_cascading_option_from_dict = CustomFieldContextDefaultValueCascadingOption.from_dict(custom_field_context_default_value_cascading_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


