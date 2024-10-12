# StreamingComputationTask

A task which describes what action should be performed for the specified streaming computation ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_ranges** | [**List[StreamingComputationRanges]**](StreamingComputationRanges.md) | Contains ranges of a streaming computation this task should apply to. | [optional] 
**data_disks** | [**List[MountedDataDisk]**](MountedDataDisk.md) | Describes the set of data disks this task should apply to. | [optional] 
**task_type** | **str** | A type of streaming computation task. | [optional] 

## Example

```python
from openapi_client.models.streaming_computation_task import StreamingComputationTask

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingComputationTask from a JSON string
streaming_computation_task_instance = StreamingComputationTask.from_json(json)
# print the JSON string representation of the object
print(StreamingComputationTask.to_json())

# convert the object into a dict
streaming_computation_task_dict = streaming_computation_task_instance.to_dict()
# create an instance of StreamingComputationTask from a dict
streaming_computation_task_from_dict = StreamingComputationTask.from_dict(streaming_computation_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


