# EncryptionSettings

Encryption settings for disk or snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_key** | [**KeyVaultAndSecretReference**](KeyVaultAndSecretReference.md) |  | [optional] 
**enabled** | **bool** | Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. | [optional] 
**key_encryption_key** | [**KeyVaultAndKeyReference**](KeyVaultAndKeyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption_settings import EncryptionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSettings from a JSON string
encryption_settings_instance = EncryptionSettings.from_json(json)
# print the JSON string representation of the object
print(EncryptionSettings.to_json())

# convert the object into a dict
encryption_settings_dict = encryption_settings_instance.to_dict()
# create an instance of EncryptionSettings from a dict
encryption_settings_from_dict = EncryptionSettings.from_dict(encryption_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


