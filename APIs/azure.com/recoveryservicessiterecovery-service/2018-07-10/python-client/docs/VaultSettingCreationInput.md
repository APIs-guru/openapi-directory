# VaultSettingCreationInput

Input to create vault setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultSettingCreationInputProperties**](VaultSettingCreationInputProperties.md) |  | 

## Example

```python
from openapi_client.models.vault_setting_creation_input import VaultSettingCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSettingCreationInput from a JSON string
vault_setting_creation_input_instance = VaultSettingCreationInput.from_json(json)
# print the JSON string representation of the object
print(VaultSettingCreationInput.to_json())

# convert the object into a dict
vault_setting_creation_input_dict = vault_setting_creation_input_instance.to_dict()
# create an instance of VaultSettingCreationInput from a dict
vault_setting_creation_input_from_dict = VaultSettingCreationInput.from_dict(vault_setting_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


