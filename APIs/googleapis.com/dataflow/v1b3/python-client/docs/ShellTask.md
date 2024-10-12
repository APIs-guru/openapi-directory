# ShellTask

A task which consists of a shell command for the worker to execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The shell command to run. | [optional] 
**exit_code** | **int** | Exit code for the task. | [optional] 

## Example

```python
from openapi_client.models.shell_task import ShellTask

# TODO update the JSON string below
json = "{}"
# create an instance of ShellTask from a JSON string
shell_task_instance = ShellTask.from_json(json)
# print the JSON string representation of the object
print(ShellTask.to_json())

# convert the object into a dict
shell_task_dict = shell_task_instance.to_dict()
# create an instance of ShellTask from a dict
shell_task_from_dict = ShellTask.from_dict(shell_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


