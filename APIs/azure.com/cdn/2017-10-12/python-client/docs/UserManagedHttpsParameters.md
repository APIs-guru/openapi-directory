# UserManagedHttpsParameters

Defines the certificate source parameters using user's keyvault certificate for enabling SSL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_source_parameters** | [**KeyVaultCertificateSourceParameters**](KeyVaultCertificateSourceParameters.md) |  | 

## Example

```python
from openapi_client.models.user_managed_https_parameters import UserManagedHttpsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UserManagedHttpsParameters from a JSON string
user_managed_https_parameters_instance = UserManagedHttpsParameters.from_json(json)
# print the JSON string representation of the object
print(UserManagedHttpsParameters.to_json())

# convert the object into a dict
user_managed_https_parameters_dict = user_managed_https_parameters_instance.to_dict()
# create an instance of UserManagedHttpsParameters from a dict
user_managed_https_parameters_from_dict = UserManagedHttpsParameters.from_dict(user_managed_https_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


