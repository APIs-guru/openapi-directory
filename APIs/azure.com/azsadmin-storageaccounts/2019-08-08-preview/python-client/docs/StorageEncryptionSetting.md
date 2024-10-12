# StorageEncryptionSetting

Storage Encryption setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Bool to indicate whether enabled or not. | [optional] [readonly] 
**last_enabled_time** | **str** | A rough estimate of the date/time when the encryption was last enabled by the user. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_encryption_setting import StorageEncryptionSetting

# TODO update the JSON string below
json = "{}"
# create an instance of StorageEncryptionSetting from a JSON string
storage_encryption_setting_instance = StorageEncryptionSetting.from_json(json)
# print the JSON string representation of the object
print(StorageEncryptionSetting.to_json())

# convert the object into a dict
storage_encryption_setting_dict = storage_encryption_setting_instance.to_dict()
# create an instance of StorageEncryptionSetting from a dict
storage_encryption_setting_from_dict = StorageEncryptionSetting.from_dict(storage_encryption_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


