# AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** | Whether this version is the default agent pool version. | [optional] 
**is_preview** | **bool** | Whether Kubernetes version is currently in preview. | [optional] 
**kubernetes_version** | **str** | Kubernetes version (major, minor, patch). | [optional] 

## Example

```python
from openapi_client.models.agent_pool_available_versions_properties_agent_pool_versions_inner import AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner from a JSON string
agent_pool_available_versions_properties_agent_pool_versions_inner_instance = AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner.from_json(json)
# print the JSON string representation of the object
print(AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner.to_json())

# convert the object into a dict
agent_pool_available_versions_properties_agent_pool_versions_inner_dict = agent_pool_available_versions_properties_agent_pool_versions_inner_instance.to_dict()
# create an instance of AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner from a dict
agent_pool_available_versions_properties_agent_pool_versions_inner_from_dict = AgentPoolAvailableVersionsPropertiesAgentPoolVersionsInner.from_dict(agent_pool_available_versions_properties_agent_pool_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


