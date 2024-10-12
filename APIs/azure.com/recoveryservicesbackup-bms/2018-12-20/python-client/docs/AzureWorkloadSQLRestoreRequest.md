# AzureWorkloadSQLRestoreRequest

AzureWorkload SQL -specific restore. Specifically for full/diff restore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_directory_paths** | [**List[SQLDataDirectoryMapping]**](SQLDataDirectoryMapping.md) | Data directory details | [optional] 
**is_non_recoverable** | **bool** | SQL specific property where user can chose to set no-recovery when restore operation is tried | [optional] 
**should_use_alternate_target_location** | **bool** | Default option set to true. If this is set to false, alternate data directory must be provided | [optional] 

## Example

```python
from openapi_client.models.azure_workload_sql_restore_request import AzureWorkloadSQLRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadSQLRestoreRequest from a JSON string
azure_workload_sql_restore_request_instance = AzureWorkloadSQLRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadSQLRestoreRequest.to_json())

# convert the object into a dict
azure_workload_sql_restore_request_dict = azure_workload_sql_restore_request_instance.to_dict()
# create an instance of AzureWorkloadSQLRestoreRequest from a dict
azure_workload_sql_restore_request_from_dict = AzureWorkloadSQLRestoreRequest.from_dict(azure_workload_sql_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


