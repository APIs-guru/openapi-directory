# MapTask

MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter_prefix** | **str** | Counter prefix that can be used to prefix counters. Not currently used in Dataflow. | [optional] 
**instructions** | [**List[ParallelInstruction]**](ParallelInstruction.md) | The instructions in the MapTask. | [optional] 
**stage_name** | **str** | System-defined name of the stage containing this MapTask. Unique across the workflow. | [optional] 
**system_name** | **str** | System-defined name of this MapTask. Unique across the workflow. | [optional] 

## Example

```python
from openapi_client.models.map_task import MapTask

# TODO update the JSON string below
json = "{}"
# create an instance of MapTask from a JSON string
map_task_instance = MapTask.from_json(json)
# print the JSON string representation of the object
print(MapTask.to_json())

# convert the object into a dict
map_task_dict = map_task_instance.to_dict()
# create an instance of MapTask from a dict
map_task_from_dict = MapTask.from_dict(map_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


