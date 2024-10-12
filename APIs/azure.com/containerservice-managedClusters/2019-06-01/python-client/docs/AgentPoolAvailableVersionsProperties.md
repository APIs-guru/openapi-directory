# AgentPoolAvailableVersionsProperties

The list of available agent pool versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pool_versions** | [**List[AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner]**](AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner.md) | List of versions available for agent pool. | [optional] 

## Example

```python
from openapi_client.models.agent_pool_available_versions_properties import AgentPoolAvailableVersionsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolAvailableVersionsProperties from a JSON string
agent_pool_available_versions_properties_instance = AgentPoolAvailableVersionsProperties.from_json(json)
# print the JSON string representation of the object
print(AgentPoolAvailableVersionsProperties.to_json())

# convert the object into a dict
agent_pool_available_versions_properties_dict = agent_pool_available_versions_properties_instance.to_dict()
# create an instance of AgentPoolAvailableVersionsProperties from a dict
agent_pool_available_versions_properties_from_dict = AgentPoolAvailableVersionsProperties.from_dict(agent_pool_available_versions_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


