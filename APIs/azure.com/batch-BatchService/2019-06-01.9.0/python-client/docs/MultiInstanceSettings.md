# MultiInstanceSettings

Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_resource_files** | [**List[ResourceFile]**](ResourceFile.md) | The difference between common resource files and Task resource files is that common resource files are downloaded for all subtasks including the primary, whereas Task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the Task working directory, but instead are downloaded to the Task root directory (one directory above the working directory).  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**coordination_command_line** | **str** | A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages. | 
**number_of_instances** | **int** | If omitted, the default is 1. | [optional] 

## Example

```python
from openapi_client.models.multi_instance_settings import MultiInstanceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MultiInstanceSettings from a JSON string
multi_instance_settings_instance = MultiInstanceSettings.from_json(json)
# print the JSON string representation of the object
print(MultiInstanceSettings.to_json())

# convert the object into a dict
multi_instance_settings_dict = multi_instance_settings_instance.to_dict()
# create an instance of MultiInstanceSettings from a dict
multi_instance_settings_from_dict = MultiInstanceSettings.from_dict(multi_instance_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


