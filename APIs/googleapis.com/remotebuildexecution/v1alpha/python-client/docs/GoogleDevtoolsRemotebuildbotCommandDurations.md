# GoogleDevtoolsRemotebuildbotCommandDurations

CommandDuration contains the various duration metrics tracked when a bot performs a command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cas_release** | **str** | The time spent to release the CAS blobs used by the task. | [optional] 
**cm_wait_for_assignment** | **str** | The time spent waiting for Container Manager to assign an asynchronous container for execution. | [optional] 
**docker_prep** | **str** | The time spent preparing the command to be run in a Docker container (includes pulling the Docker image, if necessary). | [optional] 
**docker_prep_start_time** | **str** | The timestamp when docker preparation begins. | [optional] 
**download** | **str** | The time spent downloading the input files and constructing the working directory. | [optional] 
**download_start_time** | **str** | The timestamp when downloading the input files begins. | [optional] 
**exec_start_time** | **str** | The timestamp when execution begins. | [optional] 
**execution** | **str** | The time spent executing the command (i.e., doing useful work). | [optional] 
**iso_prep_done** | **str** | The timestamp when preparation is done and bot starts downloading files. | [optional] 
**overall** | **str** | The time spent completing the command, in total. | [optional] 
**stderr** | **str** | The time spent uploading the stderr logs. | [optional] 
**stdout** | **str** | The time spent uploading the stdout logs. | [optional] 
**upload** | **str** | The time spent uploading the output files. | [optional] 
**upload_start_time** | **str** | The timestamp when uploading the output files begins. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildbot_command_durations import GoogleDevtoolsRemotebuildbotCommandDurations

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildbotCommandDurations from a JSON string
google_devtools_remotebuildbot_command_durations_instance = GoogleDevtoolsRemotebuildbotCommandDurations.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildbotCommandDurations.to_json())

# convert the object into a dict
google_devtools_remotebuildbot_command_durations_dict = google_devtools_remotebuildbot_command_durations_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildbotCommandDurations from a dict
google_devtools_remotebuildbot_command_durations_from_dict = GoogleDevtoolsRemotebuildbotCommandDurations.from_dict(google_devtools_remotebuildbot_command_durations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


