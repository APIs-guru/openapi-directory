# ChaosPartitionPrimaryMoveScheduledEvent

Chaos Move Primary Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**forced_move** | **bool** | Indicates a forced move. | 
**node_to** | **str** | The name of a Service Fabric node. | 
**service_name** | **str** | Service name. | 

## Example

```python
from openapi_client.models.chaos_partition_primary_move_scheduled_event import ChaosPartitionPrimaryMoveScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosPartitionPrimaryMoveScheduledEvent from a JSON string
chaos_partition_primary_move_scheduled_event_instance = ChaosPartitionPrimaryMoveScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosPartitionPrimaryMoveScheduledEvent.to_json())

# convert the object into a dict
chaos_partition_primary_move_scheduled_event_dict = chaos_partition_primary_move_scheduled_event_instance.to_dict()
# create an instance of ChaosPartitionPrimaryMoveScheduledEvent from a dict
chaos_partition_primary_move_scheduled_event_from_dict = ChaosPartitionPrimaryMoveScheduledEvent.from_dict(chaos_partition_primary_move_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


