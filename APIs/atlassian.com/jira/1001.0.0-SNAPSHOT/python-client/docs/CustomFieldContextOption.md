# CustomFieldContextOption

Details of the custom field options for a context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the option is disabled. | 
**id** | **str** | The ID of the custom field option. | 
**option_id** | **str** | For cascading options, the ID of the custom field option containing the cascading option. | [optional] 
**value** | **str** | The value of the custom field option. | 

## Example

```python
from openapi_client.models.custom_field_context_option import CustomFieldContextOption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextOption from a JSON string
custom_field_context_option_instance = CustomFieldContextOption.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextOption.to_json())

# convert the object into a dict
custom_field_context_option_dict = custom_field_context_option_instance.to_dict()
# create an instance of CustomFieldContextOption from a dict
custom_field_context_option_from_dict = CustomFieldContextOption.from_dict(custom_field_context_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


