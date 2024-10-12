# TaskRunRequest

The parameters for a task run request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_name** | **str** | The name of task against which run has to be queued. | 
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 

## Example

```python
from openapi_client.models.task_run_request import TaskRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRunRequest from a JSON string
task_run_request_instance = TaskRunRequest.from_json(json)
# print the JSON string representation of the object
print(TaskRunRequest.to_json())

# convert the object into a dict
task_run_request_dict = task_run_request_instance.to_dict()
# create an instance of TaskRunRequest from a dict
task_run_request_from_dict = TaskRunRequest.from_dict(task_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


