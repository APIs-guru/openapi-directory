# GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts

Describes the timeouts associated with this task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution** | **str** | This specifies the maximum time that the task can run, excluding the time required to download inputs or upload outputs. That is, the worker will terminate the task if it runs longer than this. | [optional] 
**idle** | **str** | This specifies the maximum amount of time the task can be idle - that is, go without generating some output in either stdout or stderr. If the process is silent for more than the specified time, the worker will terminate the task. | [optional] 
**shutdown** | **str** | If the execution or IO timeouts are exceeded, the worker will try to gracefully terminate the task and return any existing logs. However, tasks may be hard-frozen in which case this process will fail. This timeout specifies how long to wait for a terminated task to shut down gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g. SIGKILL on *nix, CTRL_BREAK_EVENT on Windows). | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_task_timeouts import GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts from a JSON string
google_devtools_remoteworkers_v1test2_command_task_timeouts_instance = GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_task_timeouts_dict = google_devtools_remoteworkers_v1test2_command_task_timeouts_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts from a dict
google_devtools_remoteworkers_v1test2_command_task_timeouts_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts.from_dict(google_devtools_remoteworkers_v1test2_command_task_timeouts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


