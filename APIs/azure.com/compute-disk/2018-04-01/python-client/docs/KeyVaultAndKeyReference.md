# KeyVaultAndKeyReference

Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_url** | **str** | Url pointing to a key or secret in KeyVault | 
**source_vault** | [**SourceVault**](SourceVault.md) |  | 

## Example

```python
from openapi_client.models.key_vault_and_key_reference import KeyVaultAndKeyReference

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultAndKeyReference from a JSON string
key_vault_and_key_reference_instance = KeyVaultAndKeyReference.from_json(json)
# print the JSON string representation of the object
print(KeyVaultAndKeyReference.to_json())

# convert the object into a dict
key_vault_and_key_reference_dict = key_vault_and_key_reference_instance.to_dict()
# create an instance of KeyVaultAndKeyReference from a dict
key_vault_and_key_reference_from_dict = KeyVaultAndKeyReference.from_dict(key_vault_and_key_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


