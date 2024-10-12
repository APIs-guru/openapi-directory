# ClusterUpgradeGKEUpgradeOverride

Properties of a GKE upgrade that can be overridden by the user. For example, a user can skip soaking by overriding the soaking to 0.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_conditions** | [**ClusterUpgradePostConditions**](ClusterUpgradePostConditions.md) |  | [optional] 
**upgrade** | [**ClusterUpgradeGKEUpgrade**](ClusterUpgradeGKEUpgrade.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_gke_upgrade_override import ClusterUpgradeGKEUpgradeOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeGKEUpgradeOverride from a JSON string
cluster_upgrade_gke_upgrade_override_instance = ClusterUpgradeGKEUpgradeOverride.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeGKEUpgradeOverride.to_json())

# convert the object into a dict
cluster_upgrade_gke_upgrade_override_dict = cluster_upgrade_gke_upgrade_override_instance.to_dict()
# create an instance of ClusterUpgradeGKEUpgradeOverride from a dict
cluster_upgrade_gke_upgrade_override_from_dict = ClusterUpgradeGKEUpgradeOverride.from_dict(cluster_upgrade_gke_upgrade_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


