# AgentTaskUserAccount

AgentTaskUserAccount contains the information of a POSIX account on the guest os which is used to execute the runnables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **str** | gid id an unique identifier of the POSIX account group corresponding to the user account. | [optional] 
**uid** | **str** | uid is an unique identifier of the POSIX account corresponding to the user account. | [optional] 

## Example

```python
from openapi_client.models.agent_task_user_account import AgentTaskUserAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTaskUserAccount from a JSON string
agent_task_user_account_instance = AgentTaskUserAccount.from_json(json)
# print the JSON string representation of the object
print(AgentTaskUserAccount.to_json())

# convert the object into a dict
agent_task_user_account_dict = agent_task_user_account_instance.to_dict()
# create an instance of AgentTaskUserAccount from a dict
agent_task_user_account_from_dict = AgentTaskUserAccount.from_dict(agent_task_user_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


