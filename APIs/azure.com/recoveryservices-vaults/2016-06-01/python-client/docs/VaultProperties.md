# VaultProperties

Properties of the vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Provisioning State. | [optional] [readonly] 
**upgrade_details** | [**UpgradeDetails**](UpgradeDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.vault_properties import VaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultProperties from a JSON string
vault_properties_instance = VaultProperties.from_json(json)
# print the JSON string representation of the object
print(VaultProperties.to_json())

# convert the object into a dict
vault_properties_dict = vault_properties_instance.to_dict()
# create an instance of VaultProperties from a dict
vault_properties_from_dict = VaultProperties.from_dict(vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


