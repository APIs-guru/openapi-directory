# ManagedClusterPoolUpgradeProfile

The list of available upgrade versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetes_version** | **str** | Kubernetes version (major, minor, patch). | 
**name** | **str** | Pool name. | [optional] 
**os_type** | [**OSType**](OSType.md) |  | [default to OSType.LINUX]
**upgrades** | [**List[AgentPoolUpgradeProfilePropertiesUpgradesInner]**](AgentPoolUpgradeProfilePropertiesUpgradesInner.md) | List of orchestrator types and versions available for upgrade. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_pool_upgrade_profile import ManagedClusterPoolUpgradeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterPoolUpgradeProfile from a JSON string
managed_cluster_pool_upgrade_profile_instance = ManagedClusterPoolUpgradeProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterPoolUpgradeProfile.to_json())

# convert the object into a dict
managed_cluster_pool_upgrade_profile_dict = managed_cluster_pool_upgrade_profile_instance.to_dict()
# create an instance of ManagedClusterPoolUpgradeProfile from a dict
managed_cluster_pool_upgrade_profile_from_dict = ManagedClusterPoolUpgradeProfile.from_dict(managed_cluster_pool_upgrade_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


