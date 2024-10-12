# GoogleDevtoolsRemotebuildbotCommandStatus

The internal status of the command result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The status code. | [optional] 
**message** | **str** | The error message. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildbot_command_status import GoogleDevtoolsRemotebuildbotCommandStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildbotCommandStatus from a JSON string
google_devtools_remotebuildbot_command_status_instance = GoogleDevtoolsRemotebuildbotCommandStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildbotCommandStatus.to_json())

# convert the object into a dict
google_devtools_remotebuildbot_command_status_dict = google_devtools_remotebuildbot_command_status_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildbotCommandStatus from a dict
google_devtools_remotebuildbot_command_status_from_dict = GoogleDevtoolsRemotebuildbotCommandStatus.from_dict(google_devtools_remotebuildbot_command_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


