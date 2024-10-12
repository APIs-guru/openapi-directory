# AgentPoolAvailableVersions

The list of available versions for an agent pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the agent pool available versions. | [optional] [readonly] 
**name** | **str** | Name of the agent pool available versions. | [optional] [readonly] 
**properties** | [**AgentPoolAvailableVersionsProperties**](AgentPoolAvailableVersionsProperties.md) |  | 
**type** | **str** | Type of the agent pool  available versions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.agent_pool_available_versions import AgentPoolAvailableVersions

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolAvailableVersions from a JSON string
agent_pool_available_versions_instance = AgentPoolAvailableVersions.from_json(json)
# print the JSON string representation of the object
print(AgentPoolAvailableVersions.to_json())

# convert the object into a dict
agent_pool_available_versions_dict = agent_pool_available_versions_instance.to_dict()
# create an instance of AgentPoolAvailableVersions from a dict
agent_pool_available_versions_from_dict = AgentPoolAvailableVersions.from_dict(agent_pool_available_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


