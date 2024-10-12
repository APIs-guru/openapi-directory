# AgentPool

Agent Pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**properties** | [**ManagedClusterAgentPoolProfileProperties**](ManagedClusterAgentPoolProfileProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.agent_pool import AgentPool

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPool from a JSON string
agent_pool_instance = AgentPool.from_json(json)
# print the JSON string representation of the object
print(AgentPool.to_json())

# convert the object into a dict
agent_pool_dict = agent_pool_instance.to_dict()
# create an instance of AgentPool from a dict
agent_pool_from_dict = AgentPool.from_dict(agent_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


