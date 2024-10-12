# AzureWorkloadSQLRecoveryPoint

SQL specific recoverypoint, specifically encapsulates full/diff recoverypoint along with extended info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureWorkloadSQLRecoveryPointExtendedInfo**](AzureWorkloadSQLRecoveryPointExtendedInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_workload_sql_recovery_point import AzureWorkloadSQLRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadSQLRecoveryPoint from a JSON string
azure_workload_sql_recovery_point_instance = AzureWorkloadSQLRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadSQLRecoveryPoint.to_json())

# convert the object into a dict
azure_workload_sql_recovery_point_dict = azure_workload_sql_recovery_point_instance.to_dict()
# create an instance of AzureWorkloadSQLRecoveryPoint from a dict
azure_workload_sql_recovery_point_from_dict = AzureWorkloadSQLRecoveryPoint.from_dict(azure_workload_sql_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


