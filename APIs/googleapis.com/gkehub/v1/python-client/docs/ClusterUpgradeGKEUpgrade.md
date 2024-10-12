# ClusterUpgradeGKEUpgrade

GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the upgrade, e.g., \&quot;k8s_control_plane\&quot;. It should be a valid upgrade name. It must not exceet 99 characters. | [optional] 
**version** | **str** | Version of the upgrade, e.g., \&quot;1.22.1-gke.100\&quot;. It should be a valid version. It must not exceet 99 characters. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_gke_upgrade import ClusterUpgradeGKEUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeGKEUpgrade from a JSON string
cluster_upgrade_gke_upgrade_instance = ClusterUpgradeGKEUpgrade.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeGKEUpgrade.to_json())

# convert the object into a dict
cluster_upgrade_gke_upgrade_dict = cluster_upgrade_gke_upgrade_instance.to_dict()
# create an instance of ClusterUpgradeGKEUpgrade from a dict
cluster_upgrade_gke_upgrade_from_dict = ClusterUpgradeGKEUpgrade.from_dict(cluster_upgrade_gke_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


