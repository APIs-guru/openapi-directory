# AgentTaskSpec

AgentTaskSpec is the user's TaskSpec representation between Agent and CLH communication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**AgentEnvironment**](AgentEnvironment.md) |  | [optional] 
**max_run_duration** | **str** | Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. | [optional] 
**runnables** | [**List[AgentTaskRunnable]**](AgentTaskRunnable.md) | AgentTaskRunnable is runanbles that will be executed on the agent. | [optional] 
**user_account** | [**AgentTaskUserAccount**](AgentTaskUserAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.agent_task_spec import AgentTaskSpec

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTaskSpec from a JSON string
agent_task_spec_instance = AgentTaskSpec.from_json(json)
# print the JSON string representation of the object
print(AgentTaskSpec.to_json())

# convert the object into a dict
agent_task_spec_dict = agent_task_spec_instance.to_dict()
# create an instance of AgentTaskSpec from a dict
agent_task_spec_from_dict = AgentTaskSpec.from_dict(agent_task_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


