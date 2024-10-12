# GoogleDevtoolsRemoteworkersV1test2CommandOutputs

DEPRECATED - use CommandResult instead. Describes the actual outputs from the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | exit_code is only fully reliable if the status&#39; code is OK. If the task exceeded its deadline or was cancelled, the process may still produce an exit code as it is cancelled, and this will be populated, but a successful (zero) is unlikely to be correct unless the status code is OK. | [optional] 
**outputs** | [**GoogleDevtoolsRemoteworkersV1test2Digest**](GoogleDevtoolsRemoteworkersV1test2Digest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_outputs import GoogleDevtoolsRemoteworkersV1test2CommandOutputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandOutputs from a JSON string
google_devtools_remoteworkers_v1test2_command_outputs_instance = GoogleDevtoolsRemoteworkersV1test2CommandOutputs.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandOutputs.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_outputs_dict = google_devtools_remoteworkers_v1test2_command_outputs_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandOutputs from a dict
google_devtools_remoteworkers_v1test2_command_outputs_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandOutputs.from_dict(google_devtools_remoteworkers_v1test2_command_outputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


