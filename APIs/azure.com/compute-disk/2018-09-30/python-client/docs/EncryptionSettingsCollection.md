# EncryptionSettingsCollection

Encryption settings for disk or snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. | 
**encryption_settings** | [**List[EncryptionSettingsElement]**](EncryptionSettingsElement.md) | A collection of encryption settings, one for each disk volume. | [optional] 

## Example

```python
from openapi_client.models.encryption_settings_collection import EncryptionSettingsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSettingsCollection from a JSON string
encryption_settings_collection_instance = EncryptionSettingsCollection.from_json(json)
# print the JSON string representation of the object
print(EncryptionSettingsCollection.to_json())

# convert the object into a dict
encryption_settings_collection_dict = encryption_settings_collection_instance.to_dict()
# create an instance of EncryptionSettingsCollection from a dict
encryption_settings_collection_from_dict = EncryptionSettingsCollection.from_dict(encryption_settings_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


