# AgentPoolUpgradeProfileProperties

The list of available upgrade versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetes_version** | **str** | Kubernetes version (major, minor, patch). | 
**os_type** | [**OSType**](OSType.md) |  | [default to OSType.LINUX]
**upgrades** | [**List[AgentPoolUpgradeProfilePropertiesUpgradesInner]**](AgentPoolUpgradeProfilePropertiesUpgradesInner.md) | List of orchestrator types and versions available for upgrade. | [optional] 

## Example

```python
from openapi_client.models.agent_pool_upgrade_profile_properties import AgentPoolUpgradeProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPoolUpgradeProfileProperties from a JSON string
agent_pool_upgrade_profile_properties_instance = AgentPoolUpgradeProfileProperties.from_json(json)
# print the JSON string representation of the object
print(AgentPoolUpgradeProfileProperties.to_json())

# convert the object into a dict
agent_pool_upgrade_profile_properties_dict = agent_pool_upgrade_profile_properties_instance.to_dict()
# create an instance of AgentPoolUpgradeProfileProperties from a dict
agent_pool_upgrade_profile_properties_from_dict = AgentPoolUpgradeProfileProperties.from_dict(agent_pool_upgrade_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


