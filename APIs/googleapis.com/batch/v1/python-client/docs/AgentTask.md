# AgentTask

TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_task_spec** | [**AgentTaskSpec**](AgentTaskSpec.md) |  | [optional] 
**intended_state** | **str** | The intended state of the task. | [optional] 
**reached_barrier** | **str** | The highest barrier reached by all tasks in the task&#39;s TaskGroup. | [optional] 
**spec** | [**TaskSpec**](TaskSpec.md) |  | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**task** | **str** | Task name. | [optional] 
**task_source** | **str** | TaskSource represents the source of the task. | [optional] 

## Example

```python
from openapi_client.models.agent_task import AgentTask

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTask from a JSON string
agent_task_instance = AgentTask.from_json(json)
# print the JSON string representation of the object
print(AgentTask.to_json())

# convert the object into a dict
agent_task_dict = agent_task_instance.to_dict()
# create an instance of AgentTask from a dict
agent_task_from_dict = AgentTask.from_dict(agent_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


