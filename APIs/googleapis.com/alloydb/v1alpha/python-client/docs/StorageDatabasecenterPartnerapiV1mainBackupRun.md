# StorageDatabasecenterPartnerapiV1mainBackupRun

A backup run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time the backup operation completed. REQUIRED | [optional] 
**error** | [**StorageDatabasecenterPartnerapiV1mainOperationError**](StorageDatabasecenterPartnerapiV1mainOperationError.md) |  | [optional] 
**start_time** | **str** | The time the backup operation started. REQUIRED | [optional] 
**status** | **str** | The status of this run. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_backup_run import StorageDatabasecenterPartnerapiV1mainBackupRun

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainBackupRun from a JSON string
storage_databasecenter_partnerapi_v1main_backup_run_instance = StorageDatabasecenterPartnerapiV1mainBackupRun.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainBackupRun.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_backup_run_dict = storage_databasecenter_partnerapi_v1main_backup_run_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainBackupRun from a dict
storage_databasecenter_partnerapi_v1main_backup_run_from_dict = StorageDatabasecenterPartnerapiV1mainBackupRun.from_dict(storage_databasecenter_partnerapi_v1main_backup_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


