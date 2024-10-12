# AzureWorkloadSQLRecoveryPointExtendedInfo

Extended info class details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_directory_paths** | [**List[SQLDataDirectory]**](SQLDataDirectory.md) | List of data directory paths during restore operation. | [optional] [readonly] 
**data_directory_time_in_utc** | **datetime** | UTC time at which data directory info was captured | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_workload_sql_recovery_point_extended_info import AzureWorkloadSQLRecoveryPointExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadSQLRecoveryPointExtendedInfo from a JSON string
azure_workload_sql_recovery_point_extended_info_instance = AzureWorkloadSQLRecoveryPointExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadSQLRecoveryPointExtendedInfo.to_json())

# convert the object into a dict
azure_workload_sql_recovery_point_extended_info_dict = azure_workload_sql_recovery_point_extended_info_instance.to_dict()
# create an instance of AzureWorkloadSQLRecoveryPointExtendedInfo from a dict
azure_workload_sql_recovery_point_extended_info_from_dict = AzureWorkloadSQLRecoveryPointExtendedInfo.from_dict(azure_workload_sql_recovery_point_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


