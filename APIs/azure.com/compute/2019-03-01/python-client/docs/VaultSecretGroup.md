# VaultSecretGroup

Describes a set of certificates which are all in the same Key Vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_vault** | [**SubResource**](SubResource.md) |  | [optional] 
**vault_certificates** | [**List[VaultCertificate]**](VaultCertificate.md) | The list of key vault references in SourceVault which contain certificates. | [optional] 

## Example

```python
from openapi_client.models.vault_secret_group import VaultSecretGroup

# TODO update the JSON string below
json = "{}"
# create an instance of VaultSecretGroup from a JSON string
vault_secret_group_instance = VaultSecretGroup.from_json(json)
# print the JSON string representation of the object
print(VaultSecretGroup.to_json())

# convert the object into a dict
vault_secret_group_dict = vault_secret_group_instance.to_dict()
# create an instance of VaultSecretGroup from a dict
vault_secret_group_from_dict = VaultSecretGroup.from_dict(vault_secret_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


