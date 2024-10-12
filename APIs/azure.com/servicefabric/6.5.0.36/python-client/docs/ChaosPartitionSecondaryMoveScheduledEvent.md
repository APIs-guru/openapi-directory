# ChaosPartitionSecondaryMoveScheduledEvent

Chaos Move Secondary Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_node** | **str** | The name of a Service Fabric node. | 
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**forced_move** | **bool** | Indicates a forced move. | 
**service_name** | **str** | Service name. | 
**source_node** | **str** | The name of a Service Fabric node. | 

## Example

```python
from openapi_client.models.chaos_partition_secondary_move_scheduled_event import ChaosPartitionSecondaryMoveScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosPartitionSecondaryMoveScheduledEvent from a JSON string
chaos_partition_secondary_move_scheduled_event_instance = ChaosPartitionSecondaryMoveScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosPartitionSecondaryMoveScheduledEvent.to_json())

# convert the object into a dict
chaos_partition_secondary_move_scheduled_event_dict = chaos_partition_secondary_move_scheduled_event_instance.to_dict()
# create an instance of ChaosPartitionSecondaryMoveScheduledEvent from a dict
chaos_partition_secondary_move_scheduled_event_from_dict = ChaosPartitionSecondaryMoveScheduledEvent.from_dict(chaos_partition_secondary_move_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


