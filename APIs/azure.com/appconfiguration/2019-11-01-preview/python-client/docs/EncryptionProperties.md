# EncryptionProperties

The encryption settings for a configuration store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_properties** | [**KeyVaultProperties**](KeyVaultProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption_properties import EncryptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionProperties from a JSON string
encryption_properties_instance = EncryptionProperties.from_json(json)
# print the JSON string representation of the object
print(EncryptionProperties.to_json())

# convert the object into a dict
encryption_properties_dict = encryption_properties_instance.to_dict()
# create an instance of EncryptionProperties from a dict
encryption_properties_from_dict = EncryptionProperties.from_dict(encryption_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


