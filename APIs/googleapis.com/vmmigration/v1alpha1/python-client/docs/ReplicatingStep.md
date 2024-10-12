# ReplicatingStep

ReplicatingStep contains specific step details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_thirty_minutes_average_bytes_per_second** | **str** | The source disks replication rate for the last 30 minutes in bytes per second. | [optional] 
**last_two_minutes_average_bytes_per_second** | **str** | The source disks replication rate for the last 2 minutes in bytes per second. | [optional] 
**replicated_bytes** | **str** | Replicated bytes in the step. | [optional] 
**total_bytes** | **str** | Total bytes to be handled in the step. | [optional] 

## Example

```python
from openapi_client.models.replicating_step import ReplicatingStep

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicatingStep from a JSON string
replicating_step_instance = ReplicatingStep.from_json(json)
# print the JSON string representation of the object
print(ReplicatingStep.to_json())

# convert the object into a dict
replicating_step_dict = replicating_step_instance.to_dict()
# create an instance of ReplicatingStep from a dict
replicating_step_from_dict = ReplicatingStep.from_dict(replicating_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


