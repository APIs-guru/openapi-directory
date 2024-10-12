# CustomFieldContextDefaultValueForgeUserField

Defaults for a Forge user custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the default user. | 
**context_id** | **str** | The ID of the context. | 
**type** | **str** |  | 
**user_filter** | [**UserFilter**](UserFilter.md) |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_user_field import CustomFieldContextDefaultValueForgeUserField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeUserField from a JSON string
custom_field_context_default_value_forge_user_field_instance = CustomFieldContextDefaultValueForgeUserField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeUserField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_user_field_dict = custom_field_context_default_value_forge_user_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeUserField from a dict
custom_field_context_default_value_forge_user_field_from_dict = CustomFieldContextDefaultValueForgeUserField.from_dict(custom_field_context_default_value_forge_user_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


