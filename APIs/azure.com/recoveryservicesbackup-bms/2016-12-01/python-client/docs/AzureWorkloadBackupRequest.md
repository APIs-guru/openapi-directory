# AzureWorkloadBackupRequest

AzureWorkload workload-specific backup request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_type** | **str** | Type of backup, viz. Full, Differential, Log or CopyOnlyFull | [optional] 
**enable_compression** | **bool** | Bool for Compression setting | [optional] 
**recovery_point_expiry_time_in_utc** | **datetime** | Backup copy will expire after the time specified (UTC). | [optional] 

## Example

```python
from openapi_client.models.azure_workload_backup_request import AzureWorkloadBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadBackupRequest from a JSON string
azure_workload_backup_request_instance = AzureWorkloadBackupRequest.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadBackupRequest.to_json())

# convert the object into a dict
azure_workload_backup_request_dict = azure_workload_backup_request_instance.to_dict()
# create an instance of AzureWorkloadBackupRequest from a dict
azure_workload_backup_request_from_dict = AzureWorkloadBackupRequest.from_dict(azure_workload_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


