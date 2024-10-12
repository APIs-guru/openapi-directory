# AgentTaskInfo

Task Info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runnable** | **str** | The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined. | [optional] 
**task_id** | **str** | ID of the Task | [optional] 
**task_status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.agent_task_info import AgentTaskInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTaskInfo from a JSON string
agent_task_info_instance = AgentTaskInfo.from_json(json)
# print the JSON string representation of the object
print(AgentTaskInfo.to_json())

# convert the object into a dict
agent_task_info_dict = agent_task_info_instance.to_dict()
# create an instance of AgentTaskInfo from a dict
agent_task_info_from_dict = AgentTaskInfo.from_dict(agent_task_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


