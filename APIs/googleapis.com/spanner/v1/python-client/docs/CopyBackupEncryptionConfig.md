# CopyBackupEncryptionConfig

Encryption configuration for the copied backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_type** | **str** | Required. The encryption type of the backup. | [optional] 
**kms_key_name** | **str** | Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is &#x60;CUSTOMER_MANAGED_ENCRYPTION&#x60;. Values are of the form &#x60;projects//locations//keyRings//cryptoKeys/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.copy_backup_encryption_config import CopyBackupEncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CopyBackupEncryptionConfig from a JSON string
copy_backup_encryption_config_instance = CopyBackupEncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(CopyBackupEncryptionConfig.to_json())

# convert the object into a dict
copy_backup_encryption_config_dict = copy_backup_encryption_config_instance.to_dict()
# create an instance of CopyBackupEncryptionConfig from a dict
copy_backup_encryption_config_from_dict = CopyBackupEncryptionConfig.from_dict(copy_backup_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


