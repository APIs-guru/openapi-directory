# KeyVaultCertificateSourceParametersVault

The Key Vault containing the SSL certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.key_vault_certificate_source_parameters_vault import KeyVaultCertificateSourceParametersVault

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultCertificateSourceParametersVault from a JSON string
key_vault_certificate_source_parameters_vault_instance = KeyVaultCertificateSourceParametersVault.from_json(json)
# print the JSON string representation of the object
print(KeyVaultCertificateSourceParametersVault.to_json())

# convert the object into a dict
key_vault_certificate_source_parameters_vault_dict = key_vault_certificate_source_parameters_vault_instance.to_dict()
# create an instance of KeyVaultCertificateSourceParametersVault from a dict
key_vault_certificate_source_parameters_vault_from_dict = KeyVaultCertificateSourceParametersVault.from_dict(key_vault_certificate_source_parameters_vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


