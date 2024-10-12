# AgentPool

Represents an On-Premises Agent pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limit** | [**BandwidthLimit**](BandwidthLimit.md) |  | [optional] 
**display_name** | **str** | Specifies the client-specified AgentPool description. | [optional] 
**name** | **str** | Required. Specifies a unique string that identifies the agent pool. Format: &#x60;projects/{project_id}/agentPools/{agent_pool_id}&#x60; | [optional] 
**state** | **str** | Output only. Specifies the state of the AgentPool. | [optional] [readonly] 

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


