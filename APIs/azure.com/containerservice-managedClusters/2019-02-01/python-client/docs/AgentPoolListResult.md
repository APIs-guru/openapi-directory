# AgentPoolListResult

The response from the List Agent Pools operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of agent pool results. | [optional] [readonly] 
**value** | [**List[AgentPool]**](AgentPool.md) | The list of agent pools. | [optional] 

## Example

```python
from openapi_client.models.agent_pool_list_result import AgentPoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolListResult from a JSON string
agent_pool_list_result_instance = AgentPoolListResult.from_json(json)
# print the JSON string representation of the object
print(AgentPoolListResult.to_json())

# convert the object into a dict
agent_pool_list_result_dict = agent_pool_list_result_instance.to_dict()
# create an instance of AgentPoolListResult from a dict
agent_pool_list_result_from_dict = AgentPoolListResult.from_dict(agent_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


