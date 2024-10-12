# PartitionPrimaryMoveAnalysisEvent

Partition Primary Move Analysis event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_node** | **str** | The name of a Service Fabric node. | 
**move_reason** | **str** | Move reason. | 
**previous_node** | **str** | The name of a Service Fabric node. | 
**relevant_traces** | **str** | Relevant traces. | 
**when_move_completed** | **datetime** | Time when the move was completed. | 

## Example

```python
from openapi_client.models.partition_primary_move_analysis_event import PartitionPrimaryMoveAnalysisEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionPrimaryMoveAnalysisEvent from a JSON string
partition_primary_move_analysis_event_instance = PartitionPrimaryMoveAnalysisEvent.from_json(json)
# print the JSON string representation of the object
print(PartitionPrimaryMoveAnalysisEvent.to_json())

# convert the object into a dict
partition_primary_move_analysis_event_dict = partition_primary_move_analysis_event_instance.to_dict()
# create an instance of PartitionPrimaryMoveAnalysisEvent from a dict
partition_primary_move_analysis_event_from_dict = PartitionPrimaryMoveAnalysisEvent.from_dict(partition_primary_move_analysis_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


