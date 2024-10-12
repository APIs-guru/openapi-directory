# CustomFieldUpdatedContextOptionsList

A list of custom field options for a context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[CustomFieldOptionUpdate]**](CustomFieldOptionUpdate.md) | The updated custom field options. | [optional] 

## Example

```python
from openapi_client.models.custom_field_updated_context_options_list import CustomFieldUpdatedContextOptionsList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldUpdatedContextOptionsList from a JSON string
custom_field_updated_context_options_list_instance = CustomFieldUpdatedContextOptionsList.from_json(json)
# print the JSON string representation of the object
print(CustomFieldUpdatedContextOptionsList.to_json())

# convert the object into a dict
custom_field_updated_context_options_list_dict = custom_field_updated_context_options_list_instance.to_dict()
# create an instance of CustomFieldUpdatedContextOptionsList from a dict
custom_field_updated_context_options_list_from_dict = CustomFieldUpdatedContextOptionsList.from_dict(custom_field_updated_context_options_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


