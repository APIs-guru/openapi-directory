# VaultSettingProperties

Vault setting properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_solution_id** | **str** | The migration solution ARM Id. | [optional] 

## Example

```python
from openapi_client.models.vault_setting_properties import VaultSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSettingProperties from a JSON string
vault_setting_properties_instance = VaultSettingProperties.from_json(json)
# print the JSON string representation of the object
print(VaultSettingProperties.to_json())

# convert the object into a dict
vault_setting_properties_dict = vault_setting_properties_instance.to_dict()
# create an instance of VaultSettingProperties from a dict
vault_setting_properties_from_dict = VaultSettingProperties.from_dict(vault_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


