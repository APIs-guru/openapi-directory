# Encryption

Properties to configure Encryption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_source** | **str** | Enumerates the possible value of keySource for Encryption | [optional] [default to 'Microsoft.KeyVault']
**key_vault_properties** | [**KeyVaultProperties**](KeyVaultProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption import Encryption

# TODO update the JSON string below
json = "{}"
# create an instance of Encryption from a JSON string
encryption_instance = Encryption.from_json(json)
# print the JSON string representation of the object
print(Encryption.to_json())

# convert the object into a dict
encryption_dict = encryption_instance.to_dict()
# create an instance of Encryption from a dict
encryption_from_dict = Encryption.from_dict(encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


