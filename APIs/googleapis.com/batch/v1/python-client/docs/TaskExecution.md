# TaskExecution

This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success. | [optional] 

## Example

```python
from openapi_client.models.task_execution import TaskExecution

# TODO update the JSON string below
json = "{}"
# create an instance of TaskExecution from a JSON string
task_execution_instance = TaskExecution.from_json(json)
# print the JSON string representation of the object
print(TaskExecution.to_json())

# convert the object into a dict
task_execution_dict = task_execution_instance.to_dict()
# create an instance of TaskExecution from a dict
task_execution_from_dict = TaskExecution.from_dict(task_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


