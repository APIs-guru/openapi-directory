# PrivateRegistryCredentials

Credentials to access a container image in a private repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | One of password or passwordSecretReference must be specified. | [optional] 
**password_secret_reference** | [**KeyVaultSecretReference**](KeyVaultSecretReference.md) |  | [optional] 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.private_registry_credentials import PrivateRegistryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateRegistryCredentials from a JSON string
private_registry_credentials_instance = PrivateRegistryCredentials.from_json(json)
# print the JSON string representation of the object
print(PrivateRegistryCredentials.to_json())

# convert the object into a dict
private_registry_credentials_dict = private_registry_credentials_instance.to_dict()
# create an instance of PrivateRegistryCredentials from a dict
private_registry_credentials_from_dict = PrivateRegistryCredentials.from_dict(private_registry_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


