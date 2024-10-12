# KeyVaultCertificateSourceParameters

Parameters required for bring-your-own-certification via Key Vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_name** | **str** | The name of the Key Vault secret representing the full certificate PFX | [optional] 
**secret_version** | **str** | The version of the Key Vault secret representing the full certificate PFX | [optional] 
**vault** | [**KeyVaultCertificateSourceParametersVault**](KeyVaultCertificateSourceParametersVault.md) |  | [optional] 

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


