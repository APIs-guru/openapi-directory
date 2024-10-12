# AzureWorkloadSQLPointInTimeRestoreRequest

AzureWorkload SQL -specific restore. Specifically for PointInTime/Log restore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**point_in_time** | **datetime** | PointInTime value | [optional] 

## Example

```python
from openapi_client.models.azure_workload_sql_point_in_time_restore_request import AzureWorkloadSQLPointInTimeRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadSQLPointInTimeRestoreRequest from a JSON string
azure_workload_sql_point_in_time_restore_request_instance = AzureWorkloadSQLPointInTimeRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadSQLPointInTimeRestoreRequest.to_json())

# convert the object into a dict
azure_workload_sql_point_in_time_restore_request_dict = azure_workload_sql_point_in_time_restore_request_instance.to_dict()
# create an instance of AzureWorkloadSQLPointInTimeRestoreRequest from a dict
azure_workload_sql_point_in_time_restore_request_from_dict = AzureWorkloadSQLPointInTimeRestoreRequest.from_dict(azure_workload_sql_point_in_time_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


