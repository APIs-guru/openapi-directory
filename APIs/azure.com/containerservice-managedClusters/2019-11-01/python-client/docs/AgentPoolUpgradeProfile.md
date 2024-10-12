# AgentPoolUpgradeProfile

The list of available upgrades for an agent pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the agent pool upgrade profile. | [optional] [readonly] 
**name** | **str** | Name of the agent pool upgrade profile. | [optional] [readonly] 
**properties** | [**AgentPoolUpgradeProfileProperties**](AgentPoolUpgradeProfileProperties.md) |  | 
**type** | **str** | Type of the agent pool upgrade profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.agent_pool_upgrade_profile import AgentPoolUpgradeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolUpgradeProfile from a JSON string
agent_pool_upgrade_profile_instance = AgentPoolUpgradeProfile.from_json(json)
# print the JSON string representation of the object
print(AgentPoolUpgradeProfile.to_json())

# convert the object into a dict
agent_pool_upgrade_profile_dict = agent_pool_upgrade_profile_instance.to_dict()
# create an instance of AgentPoolUpgradeProfile from a dict
agent_pool_upgrade_profile_from_dict = AgentPoolUpgradeProfile.from_dict(agent_pool_upgrade_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


