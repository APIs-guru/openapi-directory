# AgentPoolUpgradeProfilePropertiesUpgradesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_preview** | **bool** | Whether Kubernetes version is currently in preview. | [optional] 
**kubernetes_version** | **str** | Kubernetes version (major, minor, patch). | [optional] 

## Example

```python
from openapi_client.models.agent_pool_upgrade_profile_properties_upgrades_inner import AgentPoolUpgradeProfilePropertiesUpgradesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolUpgradeProfilePropertiesUpgradesInner from a JSON string
agent_pool_upgrade_profile_properties_upgrades_inner_instance = AgentPoolUpgradeProfilePropertiesUpgradesInner.from_json(json)
# print the JSON string representation of the object
print(AgentPoolUpgradeProfilePropertiesUpgradesInner.to_json())

# convert the object into a dict
agent_pool_upgrade_profile_properties_upgrades_inner_dict = agent_pool_upgrade_profile_properties_upgrades_inner_instance.to_dict()
# create an instance of AgentPoolUpgradeProfilePropertiesUpgradesInner from a dict
agent_pool_upgrade_profile_properties_upgrades_inner_from_dict = AgentPoolUpgradeProfilePropertiesUpgradesInner.from_dict(agent_pool_upgrade_profile_properties_upgrades_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


