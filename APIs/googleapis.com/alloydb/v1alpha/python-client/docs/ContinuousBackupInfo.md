# ContinuousBackupInfo

ContinuousBackupInfo describes the continuous backup properties of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliest_restorable_time** | **str** | Output only. The earliest restorable time that can be restored to. Output only field. | [optional] [readonly] 
**enabled_time** | **str** | Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled. | [optional] [readonly] 
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**schedule** | **List[str]** | Output only. Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.continuous_backup_info import ContinuousBackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousBackupInfo from a JSON string
continuous_backup_info_instance = ContinuousBackupInfo.from_json(json)
# print the JSON string representation of the object
print(ContinuousBackupInfo.to_json())

# convert the object into a dict
continuous_backup_info_dict = continuous_backup_info_instance.to_dict()
# create an instance of ContinuousBackupInfo from a dict
continuous_backup_info_from_dict = ContinuousBackupInfo.from_dict(continuous_backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


