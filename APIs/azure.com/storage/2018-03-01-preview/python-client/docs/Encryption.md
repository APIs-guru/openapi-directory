# Encryption

The encryption settings on the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_source** | **str** | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault | [default to 'Storage']
**keyvaultproperties** | [**KeyVaultProperties**](KeyVaultProperties.md) |  | [optional] 
**services** | [**EncryptionServices**](EncryptionServices.md) |  | [optional] 

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


