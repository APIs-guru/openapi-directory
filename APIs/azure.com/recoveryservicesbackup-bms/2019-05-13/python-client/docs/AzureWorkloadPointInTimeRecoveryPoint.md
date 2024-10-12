# AzureWorkloadPointInTimeRecoveryPoint

Recovery point specific to PointInTime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_ranges** | [**List[PointInTimeRange]**](PointInTimeRange.md) | List of log ranges | [optional] 

## Example

```python
from openapi_client.models.azure_workload_point_in_time_recovery_point import AzureWorkloadPointInTimeRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadPointInTimeRecoveryPoint from a JSON string
azure_workload_point_in_time_recovery_point_instance = AzureWorkloadPointInTimeRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadPointInTimeRecoveryPoint.to_json())

# convert the object into a dict
azure_workload_point_in_time_recovery_point_dict = azure_workload_point_in_time_recovery_point_instance.to_dict()
# create an instance of AzureWorkloadPointInTimeRecoveryPoint from a dict
azure_workload_point_in_time_recovery_point_from_dict = AzureWorkloadPointInTimeRecoveryPoint.from_dict(azure_workload_point_in_time_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


