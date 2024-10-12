# EnterpriseCrmEventbusProtoEventExecutionSnapshot

Contains the snapshot of the event execution for a given checkpoint. Next available id: 13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkpoint_task_number** | **str** | Indicates \&quot;right after which checkpoint task&#39;s execution\&quot; this snapshot is taken. | [optional] 
**condition_results** | [**List[EnterpriseCrmEventbusProtoConditionResult]**](EnterpriseCrmEventbusProtoConditionResult.md) | All of the computed conditions that been calculated. | [optional] 
**diff_params** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**event_execution_info_id** | **str** | Points to the event execution info this snapshot belongs to. | [optional] 
**event_execution_snapshot_id** | **str** | Auto-generated. Used as primary key for EventExecutionSnapshots table. | [optional] 
**event_execution_snapshot_metadata** | [**EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata**](EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata.md) |  | [optional] 
**event_params** | [**EnterpriseCrmEventbusProtoEventParameters**](EnterpriseCrmEventbusProtoEventParameters.md) |  | [optional] 
**exceed_max_size** | **bool** | indicate whether snapshot exceeded maximum size before clean up | [optional] 
**snapshot_time** | **str** | Indicates when this snapshot is taken. | [optional] 
**task_execution_details** | [**List[EnterpriseCrmEventbusProtoTaskExecutionDetails]**](EnterpriseCrmEventbusProtoTaskExecutionDetails.md) | All of the task execution details at the given point of time. | [optional] 
**task_name** | **str** | The task name associated with this snapshot. Could be empty. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_event_execution_snapshot import EnterpriseCrmEventbusProtoEventExecutionSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoEventExecutionSnapshot from a JSON string
enterprise_crm_eventbus_proto_event_execution_snapshot_instance = EnterpriseCrmEventbusProtoEventExecutionSnapshot.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoEventExecutionSnapshot.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_event_execution_snapshot_dict = enterprise_crm_eventbus_proto_event_execution_snapshot_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoEventExecutionSnapshot from a dict
enterprise_crm_eventbus_proto_event_execution_snapshot_from_dict = EnterpriseCrmEventbusProtoEventExecutionSnapshot.from_dict(enterprise_crm_eventbus_proto_event_execution_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


