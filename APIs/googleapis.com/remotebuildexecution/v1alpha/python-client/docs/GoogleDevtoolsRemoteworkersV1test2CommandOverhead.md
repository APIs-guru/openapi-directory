# GoogleDevtoolsRemoteworkersV1test2CommandOverhead

DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time. | [optional] 
**overhead** | **str** | The amount of time *not* spent executing the command (ie uploading/downloading files). | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_command_overhead import GoogleDevtoolsRemoteworkersV1test2CommandOverhead

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandOverhead from a JSON string
google_devtools_remoteworkers_v1test2_command_overhead_instance = GoogleDevtoolsRemoteworkersV1test2CommandOverhead.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2CommandOverhead.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_command_overhead_dict = google_devtools_remoteworkers_v1test2_command_overhead_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2CommandOverhead from a dict
google_devtools_remoteworkers_v1test2_command_overhead_from_dict = GoogleDevtoolsRemoteworkersV1test2CommandOverhead.from_dict(google_devtools_remoteworkers_v1test2_command_overhead_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


