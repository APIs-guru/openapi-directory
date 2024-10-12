# EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_attempt_num** | **int** | the event attempt number this snapshot belongs to. | [optional] 
**task_attempt_num** | **int** | the task attempt number this snapshot belongs to. Could be empty. | [optional] 
**task_label** | **str** | the task label associated with this snapshot. Could be empty. | [optional] 
**task_name** | **str** | the task name associated with this snapshot. Could be empty. | [optional] 
**task_number** | **str** | The task number associated with this snapshot. Could be empty. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata import EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata from a JSON string
enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata_instance = EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata_dict = enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata from a dict
enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata_from_dict = EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata.from_dict(enterprise_crm_eventbus_proto_event_execution_snapshot_event_execution_snapshot_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


