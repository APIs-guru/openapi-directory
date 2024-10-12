# GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs

Describes the inputs to a shell-style task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** | The command itself to run (e.g., argv). This field should be passed directly to the underlying operating system, and so it must be sensible to that operating system. For example, on Windows, the first argument might be \&quot;C:\\Windows\\System32\\ping.exe\&quot; - that is, using drive letters and backslashes. A command for a *nix system, on the other hand, would use forward slashes. All other fields in the RWAPI must consistently use forward slashes, since those fields may be interpretted by both the service and the bot. | [optional] 
**environment_variables** | [**List[GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable]**](GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable.md) | All environment variables required by the task. | [optional] 
**files** | [**List[GoogleDevtoolsRemoteworkersV1test2Digest]**](GoogleDevtoolsRemoteworkersV1test2Digest.md) | The input filesystem to be set up prior to the task beginning. The contents should be a repeated set of FileMetadata messages though other formats are allowed if better for the implementation (eg, a LUCI-style .isolated file). This field is repeated since implementations might want to cache the metadata, in which case it may be useful to break up portions of the filesystem that change frequently (eg, specific input files) from those that don&#39;t (eg, standard header files). | [optional] 
**inline_blobs** | [**List[GoogleDevtoolsRemoteworkersV1test2Blob]**](GoogleDevtoolsRemoteworkersV1test2Blob.md) | Inline contents for blobs expected to be needed by the bot to execute the task. For example, contents of entries in &#x60;files&#x60; or blobs that are indirectly referenced by an entry there. The bot should check against this list before downloading required task inputs to reduce the number of communications between itself and the remote CAS server. | [optional] 
**working_directory** | **str** | Directory from which a command is executed. It is a relative directory with respect to the bot&#39;s working directory (i.e., \&quot;./\&quot;). If it is non-empty, then it must exist under \&quot;./\&quot;. Otherwise, \&quot;./\&quot; will be used. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_task_inputs import GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs from a JSON string
google_devtools_remoteworkers_v1test2_command_task_inputs_instance = GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_task_inputs_dict = google_devtools_remoteworkers_v1test2_command_task_inputs_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs from a dict
google_devtools_remoteworkers_v1test2_command_task_inputs_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs.from_dict(google_devtools_remoteworkers_v1test2_command_task_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


