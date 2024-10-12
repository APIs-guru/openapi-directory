# CustomFieldContextDefaultValueForgeMultiUserField

Defaults for a Forge collection of users custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[str]** | The IDs of the default users. | 
**context_id** | **str** | The ID of the context. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_forge_multi_user_field import CustomFieldContextDefaultValueForgeMultiUserField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueForgeMultiUserField from a JSON string
custom_field_context_default_value_forge_multi_user_field_instance = CustomFieldContextDefaultValueForgeMultiUserField.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueForgeMultiUserField.to_json())

# convert the object into a dict
custom_field_context_default_value_forge_multi_user_field_dict = custom_field_context_default_value_forge_multi_user_field_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueForgeMultiUserField from a dict
custom_field_context_default_value_forge_multi_user_field_from_dict = CustomFieldContextDefaultValueForgeMultiUserField.from_dict(custom_field_context_default_value_forge_multi_user_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


