# AgentInfo

VM Agent Info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Optional. The assigned Job ID | [optional] 
**report_time** | **str** | When the AgentInfo is generated. | [optional] 
**state** | **str** | Agent state. | [optional] 
**task_group_id** | **str** | The assigned task group ID. | [optional] 
**tasks** | [**List[AgentTaskInfo]**](AgentTaskInfo.md) | Task Info. | [optional] 

## Example

```python
from openapi_client.models.agent_info import AgentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AgentInfo from a JSON string
agent_info_instance = AgentInfo.from_json(json)
# print the JSON string representation of the object
print(AgentInfo.to_json())

# convert the object into a dict
agent_info_dict = agent_info_instance.to_dict()
# create an instance of AgentInfo from a dict
agent_info_from_dict = AgentInfo.from_dict(agent_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


