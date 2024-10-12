# VaultSettingCreationInputProperties

Input to create vault setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_solution_id** | **str** | The migration solution Id. | 

## Example

```python
from openapi_client.models.vault_setting_creation_input_properties import VaultSettingCreationInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSettingCreationInputProperties from a JSON string
vault_setting_creation_input_properties_instance = VaultSettingCreationInputProperties.from_json(json)
# print the JSON string representation of the object
print(VaultSettingCreationInputProperties.to_json())

# convert the object into a dict
vault_setting_creation_input_properties_dict = vault_setting_creation_input_properties_instance.to_dict()
# create an instance of VaultSettingCreationInputProperties from a dict
vault_setting_creation_input_properties_from_dict = VaultSettingCreationInputProperties.from_dict(vault_setting_creation_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


