# ManagedClusterPoolUpgradeProfileUpgradesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_preview** | **bool** | Whether Kubernetes version is currently in preview. | [optional] 
**kubernetes_version** | **str** | Kubernetes version (major, minor, patch). | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_pool_upgrade_profile_upgrades_inner import ManagedClusterPoolUpgradeProfileUpgradesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterPoolUpgradeProfileUpgradesInner from a JSON string
managed_cluster_pool_upgrade_profile_upgrades_inner_instance = ManagedClusterPoolUpgradeProfileUpgradesInner.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterPoolUpgradeProfileUpgradesInner.to_json())

# convert the object into a dict
managed_cluster_pool_upgrade_profile_upgrades_inner_dict = managed_cluster_pool_upgrade_profile_upgrades_inner_instance.to_dict()
# create an instance of ManagedClusterPoolUpgradeProfileUpgradesInner from a dict
managed_cluster_pool_upgrade_profile_upgrades_inner_from_dict = ManagedClusterPoolUpgradeProfileUpgradesInner.from_dict(managed_cluster_pool_upgrade_profile_upgrades_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


