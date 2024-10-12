# TaskRun

The task run that has the ARM resource and properties.   The task run will have the information of request and result of a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**properties** | [**TaskRunProperties**](TaskRunProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.task_run import TaskRun

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRun from a JSON string
task_run_instance = TaskRun.from_json(json)
# print the JSON string representation of the object
print(TaskRun.to_json())

# convert the object into a dict
task_run_dict = task_run_instance.to_dict()
# create an instance of TaskRun from a dict
task_run_from_dict = TaskRun.from_dict(task_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


