# StreamingSetupTask

A task which initializes part of a streaming Dataflow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drain** | **bool** | The user has requested drain. | [optional] 
**receive_work_port** | **int** | The TCP port on which the worker should listen for messages from other streaming computation workers. | [optional] 
**snapshot_config** | [**StreamingApplianceSnapshotConfig**](StreamingApplianceSnapshotConfig.md) |  | [optional] 
**streaming_computation_topology** | [**TopologyConfig**](TopologyConfig.md) |  | [optional] 
**worker_harness_port** | **int** | The TCP port used by the worker to communicate with the Dataflow worker harness. | [optional] 

## Example

```python
from openapi_client.models.streaming_setup_task import StreamingSetupTask

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingSetupTask from a JSON string
streaming_setup_task_instance = StreamingSetupTask.from_json(json)
# print the JSON string representation of the object
print(StreamingSetupTask.to_json())

# convert the object into a dict
streaming_setup_task_dict = streaming_setup_task_instance.to_dict()
# create an instance of StreamingSetupTask from a dict
streaming_setup_task_from_dict = StreamingSetupTask.from_dict(streaming_setup_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


