# ContinuousBackupConfig

ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether ContinuousBackup is enabled. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**recovery_window_days** | **int** | The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days. | [optional] 

## Example

```python
from openapi_client.models.continuous_backup_config import ContinuousBackupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousBackupConfig from a JSON string
continuous_backup_config_instance = ContinuousBackupConfig.from_json(json)
# print the JSON string representation of the object
print(ContinuousBackupConfig.to_json())

# convert the object into a dict
continuous_backup_config_dict = continuous_backup_config_instance.to_dict()
# create an instance of ContinuousBackupConfig from a dict
continuous_backup_config_from_dict = ContinuousBackupConfig.from_dict(continuous_backup_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


