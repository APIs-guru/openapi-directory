# KeyVaultAndSecretReference

Key Vault Secret Url and vault id of the encryption key 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_url** | **str** | Url pointing to a key or secret in KeyVault | 
**source_vault** | [**SourceVault**](SourceVault.md) |  | 

## Example

```python
from openapi_client.models.key_vault_and_secret_reference import KeyVaultAndSecretReference

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultAndSecretReference from a JSON string
key_vault_and_secret_reference_instance = KeyVaultAndSecretReference.from_json(json)
# print the JSON string representation of the object
print(KeyVaultAndSecretReference.to_json())

# convert the object into a dict
key_vault_and_secret_reference_dict = key_vault_and_secret_reference_instance.to_dict()
# create an instance of KeyVaultAndSecretReference from a dict
key_vault_and_secret_reference_from_dict = KeyVaultAndSecretReference.from_dict(key_vault_and_secret_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


