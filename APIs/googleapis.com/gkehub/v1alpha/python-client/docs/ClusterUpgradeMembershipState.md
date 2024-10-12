# ClusterUpgradeMembershipState

Per-membership state for this feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignored** | [**ClusterUpgradeIgnoredMembership**](ClusterUpgradeIgnoredMembership.md) |  | [optional] 
**scopes** | **List[str]** | Fully qualified scope names that this clusters is bound to which also have rollout sequencing enabled. | [optional] 
**upgrades** | [**List[ClusterUpgradeMembershipGKEUpgradeState]**](ClusterUpgradeMembershipGKEUpgradeState.md) | Actual upgrade state against desired. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_membership_state import ClusterUpgradeMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeMembershipState from a JSON string
cluster_upgrade_membership_state_instance = ClusterUpgradeMembershipState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeMembershipState.to_json())

# convert the object into a dict
cluster_upgrade_membership_state_dict = cluster_upgrade_membership_state_instance.to_dict()
# create an instance of ClusterUpgradeMembershipState from a dict
cluster_upgrade_membership_state_from_dict = ClusterUpgradeMembershipState.from_dict(cluster_upgrade_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


