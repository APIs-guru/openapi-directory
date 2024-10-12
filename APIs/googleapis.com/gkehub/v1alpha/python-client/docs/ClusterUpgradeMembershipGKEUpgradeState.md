# ClusterUpgradeMembershipGKEUpgradeState

ScopeGKEUpgradeState is a GKEUpgrade and its state per-membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ClusterUpgradeUpgradeStatus**](ClusterUpgradeUpgradeStatus.md) |  | [optional] 
**upgrade** | [**ClusterUpgradeGKEUpgrade**](ClusterUpgradeGKEUpgrade.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_membership_gke_upgrade_state import ClusterUpgradeMembershipGKEUpgradeState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeMembershipGKEUpgradeState from a JSON string
cluster_upgrade_membership_gke_upgrade_state_instance = ClusterUpgradeMembershipGKEUpgradeState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeMembershipGKEUpgradeState.to_json())

# convert the object into a dict
cluster_upgrade_membership_gke_upgrade_state_dict = cluster_upgrade_membership_gke_upgrade_state_instance.to_dict()
# create an instance of ClusterUpgradeMembershipGKEUpgradeState from a dict
cluster_upgrade_membership_gke_upgrade_state_from_dict = ClusterUpgradeMembershipGKEUpgradeState.from_dict(cluster_upgrade_membership_gke_upgrade_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


