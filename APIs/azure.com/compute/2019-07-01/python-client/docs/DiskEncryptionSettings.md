# DiskEncryptionSettings

Describes a Encryption Settings for a Disk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_key** | [**KeyVaultSecretReference**](KeyVaultSecretReference.md) |  | [optional] 
**enabled** | **bool** | Specifies whether disk encryption should be enabled on the virtual machine. | [optional] 
**key_encryption_key** | [**KeyVaultKeyReference**](KeyVaultKeyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_settings import DiskEncryptionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSettings from a JSON string
disk_encryption_settings_instance = DiskEncryptionSettings.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSettings.to_json())

# convert the object into a dict
disk_encryption_settings_dict = disk_encryption_settings_instance.to_dict()
# create an instance of DiskEncryptionSettings from a dict
disk_encryption_settings_from_dict = DiskEncryptionSettings.from_dict(disk_encryption_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


