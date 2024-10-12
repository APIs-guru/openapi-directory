# VaultExtendedInfo

Vault extended information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Algorithm for Vault ExtendedInfo | [optional] 
**encryption_key** | **str** | Encryption key. | [optional] 
**encryption_key_thumbprint** | **str** | Encryption key thumbprint. | [optional] 
**integrity_key** | **str** | Integrity key. | [optional] 

## Example

```python
from openapi_client.models.vault_extended_info import VaultExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VaultExtendedInfo from a JSON string
vault_extended_info_instance = VaultExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(VaultExtendedInfo.to_json())

# convert the object into a dict
vault_extended_info_dict = vault_extended_info_instance.to_dict()
# create an instance of VaultExtendedInfo from a dict
vault_extended_info_from_dict = VaultExtendedInfo.from_dict(vault_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


