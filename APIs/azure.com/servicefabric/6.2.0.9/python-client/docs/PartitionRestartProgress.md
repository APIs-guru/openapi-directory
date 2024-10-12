# PartitionRestartProgress

Information about a partition restart user-induced operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restart_partition_result** | [**RestartPartitionResult**](RestartPartitionResult.md) |  | [optional] 
**state** | [**OperationState**](OperationState.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_restart_progress import PartitionRestartProgress

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionRestartProgress from a JSON string
partition_restart_progress_instance = PartitionRestartProgress.from_json(json)
# print the JSON string representation of the object
print(PartitionRestartProgress.to_json())

# convert the object into a dict
partition_restart_progress_dict = partition_restart_progress_instance.to_dict()
# create an instance of PartitionRestartProgress from a dict
partition_restart_progress_from_dict = PartitionRestartProgress.from_dict(partition_restart_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


