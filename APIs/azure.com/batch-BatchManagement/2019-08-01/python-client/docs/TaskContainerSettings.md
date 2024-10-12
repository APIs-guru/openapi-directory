# TaskContainerSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_run_options** | **str** | These additional options are supplied as arguments to the \&quot;docker create\&quot; command, in addition to those controlled by the Batch Service. | [optional] 
**image_name** | **str** | This is the full image reference, as would be specified to \&quot;docker pull\&quot;. If no tag is provided as part of the image name, the tag \&quot;:latest\&quot; is used as a default. | 
**registry** | [**ContainerRegistry**](ContainerRegistry.md) |  | [optional] 
**working_directory** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.task_container_settings import TaskContainerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TaskContainerSettings from a JSON string
task_container_settings_instance = TaskContainerSettings.from_json(json)
# print the JSON string representation of the object
print(TaskContainerSettings.to_json())

# convert the object into a dict
task_container_settings_dict = task_container_settings_instance.to_dict()
# create an instance of TaskContainerSettings from a dict
task_container_settings_from_dict = TaskContainerSettings.from_dict(task_container_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


