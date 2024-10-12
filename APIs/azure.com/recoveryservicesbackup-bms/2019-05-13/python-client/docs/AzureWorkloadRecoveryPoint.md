# AzureWorkloadRecoveryPoint

Workload specific recovery point, specifically encapsulates full/diff recovery point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_time_in_utc** | **datetime** | UTC time at which recovery point was created | [optional] [readonly] 
**type** | **str** | Type of restore point | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_workload_recovery_point import AzureWorkloadRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadRecoveryPoint from a JSON string
azure_workload_recovery_point_instance = AzureWorkloadRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadRecoveryPoint.to_json())

# convert the object into a dict
azure_workload_recovery_point_dict = azure_workload_recovery_point_instance.to_dict()
# create an instance of AzureWorkloadRecoveryPoint from a dict
azure_workload_recovery_point_from_dict = AzureWorkloadRecoveryPoint.from_dict(azure_workload_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


