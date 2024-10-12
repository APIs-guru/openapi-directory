# BackupInfo

Holds information for a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_data_version** | **str** | Version of the backup data. | [optional] [readonly] 
**backup_id** | **str** | Unique GUID for the backup. | [optional] [readonly] 
**created_date_time** | **datetime** | Creation time of the backup. | [optional] [readonly] 
**deployment_id** | **str** | Deployment Id of the stamp. | [optional] [readonly] 
**oem_version** | **str** | OEM version. | [optional] [readonly] 
**role_status** | [**List[RoleOperationStatus]**](RoleOperationStatus.md) | object | [optional] 
**stamp_version** | **str** | Current version. | [optional] [readonly] 
**status** | [**OperationStatus**](OperationStatus.md) |  | [optional] 
**time_taken_to_create** | **str** | Duration to create the backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_info import BackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupInfo from a JSON string
backup_info_instance = BackupInfo.from_json(json)
# print the JSON string representation of the object
print(BackupInfo.to_json())

# convert the object into a dict
backup_info_dict = backup_info_instance.to_dict()
# create an instance of BackupInfo from a dict
backup_info_from_dict = BackupInfo.from_dict(backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


