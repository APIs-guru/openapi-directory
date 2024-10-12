# RegistryCredential

Credential information to connect to container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_encrypted** | **bool** | Indicates that supplied container registry password is encrypted. | [optional] 
**registry_password** | **str** | The password for supplied username to connect to container registry. | [optional] 
**registry_user_name** | **str** | The user name to connect to container registry. | [optional] 

## Example

```python
from openapi_client.models.registry_credential import RegistryCredential

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryCredential from a JSON string
registry_credential_instance = RegistryCredential.from_json(json)
# print the JSON string representation of the object
print(RegistryCredential.to_json())

# convert the object into a dict
registry_credential_dict = registry_credential_instance.to_dict()
# create an instance of RegistryCredential from a dict
registry_credential_from_dict = RegistryCredential.from_dict(registry_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


