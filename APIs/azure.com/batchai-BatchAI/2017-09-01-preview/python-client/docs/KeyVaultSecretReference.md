# KeyVaultSecretReference

Describes a reference to Key Vault Secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_url** | **str** |  | 
**source_vault** | [**ResourceId**](ResourceId.md) |  | 

## Example

```python
from openapi_client.models.key_vault_secret_reference import KeyVaultSecretReference

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultSecretReference from a JSON string
key_vault_secret_reference_instance = KeyVaultSecretReference.from_json(json)
# print the JSON string representation of the object
print(KeyVaultSecretReference.to_json())

# convert the object into a dict
key_vault_secret_reference_dict = key_vault_secret_reference_instance.to_dict()
# create an instance of KeyVaultSecretReference from a dict
key_vault_secret_reference_from_dict = KeyVaultSecretReference.from_dict(key_vault_secret_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


