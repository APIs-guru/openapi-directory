# BackupRun

A backup run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time the backup operation completed. REQUIRED | [optional] 
**error** | [**OperationError**](OperationError.md) |  | [optional] 
**start_time** | **str** | The time the backup operation started. REQUIRED | [optional] 
**status** | **str** | The status of this run. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.backup_run import BackupRun

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRun from a JSON string
backup_run_instance = BackupRun.from_json(json)
# print the JSON string representation of the object
print(BackupRun.to_json())

# convert the object into a dict
backup_run_dict = backup_run_instance.to_dict()
# create an instance of BackupRun from a dict
backup_run_from_dict = BackupRun.from_dict(backup_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


