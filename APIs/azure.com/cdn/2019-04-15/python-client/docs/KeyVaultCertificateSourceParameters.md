# KeyVaultCertificateSourceParameters

Describes the parameters for using a user's KeyVault certificate for securing custom domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**delete_rule** | **str** | Describes the action that shall be taken when the certificate is removed from Key Vault. | 
**resource_group_name** | **str** | Resource group of the user&#39;s Key Vault containing the SSL certificate | 
**secret_name** | **str** | The name of Key Vault Secret (representing the full certificate PFX) in Key Vault. | 
**secret_version** | **str** | The version(GUID) of Key Vault Secret in Key Vault. | 
**subscription_id** | **str** | Subscription Id of the user&#39;s Key Vault containing the SSL certificate | 
**update_rule** | **str** | Describes the action that shall be taken when the certificate is updated in Key Vault. | 
**vault_name** | **str** | The name of the user&#39;s Key Vault containing the SSL certificate | 

## Example

```python
from openapi_client.models.key_vault_certificate_source_parameters import KeyVaultCertificateSourceParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultCertificateSourceParameters from a JSON string
key_vault_certificate_source_parameters_instance = KeyVaultCertificateSourceParameters.from_json(json)
# print the JSON string representation of the object
print(KeyVaultCertificateSourceParameters.to_json())

# convert the object into a dict
key_vault_certificate_source_parameters_dict = key_vault_certificate_source_parameters_instance.to_dict()
# create an instance of KeyVaultCertificateSourceParameters from a dict
key_vault_certificate_source_parameters_from_dict = KeyVaultCertificateSourceParameters.from_dict(key_vault_certificate_source_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


