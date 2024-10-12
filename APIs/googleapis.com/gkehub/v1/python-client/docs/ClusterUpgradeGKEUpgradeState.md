# ClusterUpgradeGKEUpgradeState

GKEUpgradeState is a GKEUpgrade and its state at the scope and fleet level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | **Dict[str, str]** | Number of GKE clusters in each status code. | [optional] 
**status** | [**ClusterUpgradeUpgradeStatus**](ClusterUpgradeUpgradeStatus.md) |  | [optional] 
**upgrade** | [**ClusterUpgradeGKEUpgrade**](ClusterUpgradeGKEUpgrade.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_gke_upgrade_state import ClusterUpgradeGKEUpgradeState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeGKEUpgradeState from a JSON string
cluster_upgrade_gke_upgrade_state_instance = ClusterUpgradeGKEUpgradeState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeGKEUpgradeState.to_json())

# convert the object into a dict
cluster_upgrade_gke_upgrade_state_dict = cluster_upgrade_gke_upgrade_state_instance.to_dict()
# create an instance of ClusterUpgradeGKEUpgradeState from a dict
cluster_upgrade_gke_upgrade_state_from_dict = ClusterUpgradeGKEUpgradeState.from_dict(cluster_upgrade_gke_upgrade_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


