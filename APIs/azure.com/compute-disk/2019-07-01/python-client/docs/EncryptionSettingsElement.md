# EncryptionSettingsElement

Encryption settings for one disk volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_key** | [**KeyVaultAndSecretReference**](KeyVaultAndSecretReference.md) |  | [optional] 
**key_encryption_key** | [**KeyVaultAndKeyReference**](KeyVaultAndKeyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption_settings_element import EncryptionSettingsElement

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSettingsElement from a JSON string
encryption_settings_element_instance = EncryptionSettingsElement.from_json(json)
# print the JSON string representation of the object
print(EncryptionSettingsElement.to_json())

# convert the object into a dict
encryption_settings_element_dict = encryption_settings_element_instance.to_dict()
# create an instance of EncryptionSettingsElement from a dict
encryption_settings_element_from_dict = EncryptionSettingsElement.from_dict(encryption_settings_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


