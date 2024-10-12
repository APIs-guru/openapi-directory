# KeyVaultSecretRef

Reference to a secret stored in Azure Key Vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_name** | **str** | The secret name. | 
**vault_id** | **str** | Key vault identifier. | 
**version** | **str** | The secret version. | [optional] 

## Example

```python
from openapi_client.models.key_vault_secret_ref import KeyVaultSecretRef

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultSecretRef from a JSON string
key_vault_secret_ref_instance = KeyVaultSecretRef.from_json(json)
# print the JSON string representation of the object
print(KeyVaultSecretRef.to_json())

# convert the object into a dict
key_vault_secret_ref_dict = key_vault_secret_ref_instance.to_dict()
# create an instance of KeyVaultSecretRef from a dict
key_vault_secret_ref_from_dict = KeyVaultSecretRef.from_dict(key_vault_secret_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


