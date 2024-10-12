# TaskPropertiesUpdateParameters

The properties for updating a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**platform** | [**PlatformUpdateParameters**](PlatformUpdateParameters.md) |  | [optional] 
**status** | **str** | The current status of task. | [optional] 
**step** | [**TaskStepUpdateParameters**](TaskStepUpdateParameters.md) |  | [optional] 
**timeout** | **int** | Run timeout in seconds. | [optional] 
**trigger** | [**TriggerUpdateParameters**](TriggerUpdateParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_properties_update_parameters import TaskPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TaskPropertiesUpdateParameters from a JSON string
task_properties_update_parameters_instance = TaskPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TaskPropertiesUpdateParameters.to_json())

# convert the object into a dict
task_properties_update_parameters_dict = task_properties_update_parameters_instance.to_dict()
# create an instance of TaskPropertiesUpdateParameters from a dict
task_properties_update_parameters_from_dict = TaskPropertiesUpdateParameters.from_dict(task_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


