# AzureKeyVaultSecretReference

Azure Key Vault secret reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_name** | **object** | The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). | 
**secret_version** | **object** | The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). | [optional] 
**store** | [**LinkedServiceReference**](LinkedServiceReference.md) |  | 

## Example

```python
from openapi_client.models.azure_key_vault_secret_reference import AzureKeyVaultSecretReference

# TODO update the JSON string below
json = "{}"
# create an instance of AzureKeyVaultSecretReference from a JSON string
azure_key_vault_secret_reference_instance = AzureKeyVaultSecretReference.from_json(json)
# print the JSON string representation of the object
print(AzureKeyVaultSecretReference.to_json())

# convert the object into a dict
azure_key_vault_secret_reference_dict = azure_key_vault_secret_reference_instance.to_dict()
# create an instance of AzureKeyVaultSecretReference from a dict
azure_key_vault_secret_reference_from_dict = AzureKeyVaultSecretReference.from_dict(azure_key_vault_secret_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


