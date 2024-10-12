# GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs

Describes the expected outputs of the command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directories** | **List[str]** | A list of expected directories, relative to the execution root. All paths MUST be delimited by forward slashes. | [optional] 
**files** | **List[str]** | A list of expected files, relative to the execution root. All paths MUST be delimited by forward slashes. | [optional] 
**stderr_destination** | **str** | The destination to which any stderr should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the &#x60;files&#x60; field in this message, or it could be a URI that must be written via the ByteStream API. | [optional] 
**stdout_destination** | **str** | The destination to which any stdout should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the &#x60;files&#x60; field in this message, or it could be a URI that must be written via the ByteStream API. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_task_outputs import GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs from a JSON string
google_devtools_remoteworkers_v1test2_command_task_outputs_instance = GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_task_outputs_dict = google_devtools_remoteworkers_v1test2_command_task_outputs_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs from a dict
google_devtools_remoteworkers_v1test2_command_task_outputs_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs.from_dict(google_devtools_remoteworkers_v1test2_command_task_outputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


