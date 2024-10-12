# BackupReencryptionConfig

Backup Reencryption Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_limit** | **int** | Backup re-encryption limit | [optional] 
**backup_type** | **str** | Type of backups users want to re-encrypt. | [optional] 

## Example

```python
from openapi_client.models.backup_reencryption_config import BackupReencryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupReencryptionConfig from a JSON string
backup_reencryption_config_instance = BackupReencryptionConfig.from_json(json)
# print the JSON string representation of the object
print(BackupReencryptionConfig.to_json())

# convert the object into a dict
backup_reencryption_config_dict = backup_reencryption_config_instance.to_dict()
# create an instance of BackupReencryptionConfig from a dict
backup_reencryption_config_from_dict = BackupReencryptionConfig.from_dict(backup_reencryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


