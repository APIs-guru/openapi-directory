# VaultSetting

Vault setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultSettingProperties**](VaultSettingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault_setting import VaultSetting

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSetting from a JSON string
vault_setting_instance = VaultSetting.from_json(json)
# print the JSON string representation of the object
print(VaultSetting.to_json())

# convert the object into a dict
vault_setting_dict = vault_setting_instance.to_dict()
# create an instance of VaultSetting from a dict
vault_setting_from_dict = VaultSetting.from_dict(vault_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


