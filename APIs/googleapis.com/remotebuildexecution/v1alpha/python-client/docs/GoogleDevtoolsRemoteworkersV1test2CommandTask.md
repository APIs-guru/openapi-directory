# GoogleDevtoolsRemoteworkersV1test2CommandTask

Describes a shell-style task to execute, suitable for providing as the Bots interface's `Lease.payload` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_outputs** | [**GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs**](GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs.md) |  | [optional] 
**inputs** | [**GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs**](GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs.md) |  | [optional] 
**timeouts** | [**GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts**](GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_task import GoogleDevtoolsRemoteworkersV1test2CommandTask

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTask from a JSON string
google_devtools_remoteworkers_v1test2_command_task_instance = GoogleDevtoolsRemoteworkersV1test2CommandTask.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandTask.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_task_dict = google_devtools_remoteworkers_v1test2_command_task_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTask from a dict
google_devtools_remoteworkers_v1test2_command_task_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandTask.from_dict(google_devtools_remoteworkers_v1test2_command_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


