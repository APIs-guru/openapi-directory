# GoogleDevtoolsRemotebuildbotCommandEvents

CommandEvents contains counters for the number of warnings and errors that occurred during the execution of a command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm_usage** | **str** | Indicates if and how Container Manager is being used for task execution. | [optional] 
**docker_cache_hit** | **bool** | Indicates whether we are using a cached Docker image (true) or had to pull the Docker image (false) for this command. | [optional] 
**docker_image_name** | **str** | Docker Image name. | [optional] 
**input_cache_miss_bytes** | **float** | The input cache miss rate as a fraction of the total size of input files. | [optional] 
**input_cache_miss_files** | **float** | The input cache miss rate as a fraction of the number of input files. | [optional] 
**num_errors** | **str** | The number of errors reported. | [optional] 
**num_warnings** | **str** | The number of warnings reported. | [optional] 
**output_location** | **str** | Indicates whether output files and/or output directories were found relative to the execution root or to the user provided work directory or both or none. | [optional] 
**used_async_container** | **bool** | Indicates whether an asynchronous container was used for execution. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildbot_command_events import GoogleDevtoolsRemotebuildbotCommandEvents

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildbotCommandEvents from a JSON string
google_devtools_remotebuildbot_command_events_instance = GoogleDevtoolsRemotebuildbotCommandEvents.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildbotCommandEvents.to_json())

# convert the object into a dict
google_devtools_remotebuildbot_command_events_dict = google_devtools_remotebuildbot_command_events_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildbotCommandEvents from a dict
google_devtools_remotebuildbot_command_events_from_dict = GoogleDevtoolsRemotebuildbotCommandEvents.from_dict(google_devtools_remotebuildbot_command_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


