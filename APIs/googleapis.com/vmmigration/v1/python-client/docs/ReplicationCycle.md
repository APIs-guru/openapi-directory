# ReplicationCycle

ReplicationCycle contains information about the current replication cycle status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cycle_number** | **int** | The cycle&#39;s ordinal number. | [optional] 
**end_time** | **str** | The time the replication cycle has ended. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**name** | **str** | The identifier of the ReplicationCycle. | [optional] 
**progress_percent** | **int** | The current progress in percentage of this cycle. Was replaced by &#39;steps&#39; field, which breaks down the cycle progression more accurately. | [optional] 
**start_time** | **str** | The time the replication cycle has started. | [optional] 
**state** | **str** | State of the ReplicationCycle. | [optional] 
**steps** | [**List[CycleStep]**](CycleStep.md) | The cycle&#39;s steps list representing its progress. | [optional] 
**total_pause_duration** | **str** | The accumulated duration the replication cycle was paused. | [optional] 
**warnings** | [**List[MigrationWarning]**](MigrationWarning.md) | Output only. Warnings that occurred during the cycle. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_cycle import ReplicationCycle

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationCycle from a JSON string
replication_cycle_instance = ReplicationCycle.from_json(json)
# print the JSON string representation of the object
print(ReplicationCycle.to_json())

# convert the object into a dict
replication_cycle_dict = replication_cycle_instance.to_dict()
# create an instance of ReplicationCycle from a dict
replication_cycle_from_dict = ReplicationCycle.from_dict(replication_cycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


