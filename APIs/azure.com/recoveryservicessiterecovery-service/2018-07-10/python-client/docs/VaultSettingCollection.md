# VaultSettingCollection

Vault setting collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[VaultSetting]**](VaultSetting.md) | The list of vault setting. | [optional] 

## Example

```python
from openapi_client.models.vault_setting_collection import VaultSettingCollection

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSettingCollection from a JSON string
vault_setting_collection_instance = VaultSettingCollection.from_json(json)
# print the JSON string representation of the object
print(VaultSettingCollection.to_json())

# convert the object into a dict
vault_setting_collection_dict = vault_setting_collection_instance.to_dict()
# create an instance of VaultSettingCollection from a dict
vault_setting_collection_from_dict = VaultSettingCollection.from_dict(vault_setting_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


