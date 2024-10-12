# GoogleDevtoolsRemoteworkersV1test2CommandResult

All information about the execution of a command, suitable for providing as the Bots interface's `Lease.result` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. | [optional] 
**exit_code** | **int** | The exit code of the process. An exit code of \&quot;0\&quot; should only be trusted if &#x60;status&#x60; has a code of OK (otherwise it may simply be unset). | [optional] 
**metadata** | **List[Dict[str, object]]** | Implementation-dependent metadata about the task. Both servers and bots may define messages which can be encoded here; bots are free to provide metadata in multiple formats, and servers are free to choose one or more of the values to process and ignore others. In particular, it is *not* considered an error for the bot to provide the server with a field that it doesn&#39;t know about. | [optional] 
**outputs** | [**GoogleDevtoolsRemoteworkersV1test2Digest**](GoogleDevtoolsRemoteworkersV1test2Digest.md) |  | [optional] 
**overhead** | **str** | The amount of time *not* spent executing the command (ie uploading/downloading files). | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_result import GoogleDevtoolsRemoteworkersV1test2CommandResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandResult from a JSON string
google_devtools_remoteworkers_v1test2_command_result_instance = GoogleDevtoolsRemoteworkersV1test2CommandResult.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandResult.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_result_dict = google_devtools_remoteworkers_v1test2_command_result_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandResult from a dict
google_devtools_remoteworkers_v1test2_command_result_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandResult.from_dict(google_devtools_remoteworkers_v1test2_command_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


