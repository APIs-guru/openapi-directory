# TaskProperties

The properties of a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**creation_date** | **datetime** | The creation date of task. | [optional] [readonly] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**provisioning_state** | **str** | The provisioning state of the task. | [optional] [readonly] 
**status** | **str** | The current status of task. | [optional] 
**step** | [**TaskStepProperties**](TaskStepProperties.md) |  | 
**timeout** | **int** | Run timeout in seconds. | [optional] [default to 3600]
**trigger** | [**TriggerProperties**](TriggerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_properties import TaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TaskProperties from a JSON string
task_properties_instance = TaskProperties.from_json(json)
# print the JSON string representation of the object
print(TaskProperties.to_json())

# convert the object into a dict
task_properties_dict = task_properties_instance.to_dict()
# create an instance of TaskProperties from a dict
task_properties_from_dict = TaskProperties.from_dict(task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


