# KeyVaultCredentialSettings

Configure your SQL virtual machine to be able to connect to the Azure Key Vault service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_key_vault_url** | **str** | Azure Key Vault url. | [optional] 
**credential_name** | **str** | Credential name. | [optional] 
**enable** | **bool** | Enable or disable key vault credential setting. | [optional] 
**service_principal_name** | **str** | Service principal name to access key vault. | [optional] 
**service_principal_secret** | **str** | Service principal name secret to access key vault. | [optional] 

## Example

```python
from openapi_client.models.key_vault_credential_settings import KeyVaultCredentialSettings

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultCredentialSettings from a JSON string
key_vault_credential_settings_instance = KeyVaultCredentialSettings.from_json(json)
# print the JSON string representation of the object
print(KeyVaultCredentialSettings.to_json())

# convert the object into a dict
key_vault_credential_settings_dict = key_vault_credential_settings_instance.to_dict()
# create an instance of KeyVaultCredentialSettings from a dict
key_vault_credential_settings_from_dict = KeyVaultCredentialSettings.from_dict(key_vault_credential_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


