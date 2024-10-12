# ClusterUpgradeFleetState

**ClusterUpgrade**: The state for the fleet-level ClusterUpgrade feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream_fleets** | **List[str]** | This fleets whose upstream_fleets contain the current fleet. The fleet name should be either fleet project number or id. | [optional] 
**gke_state** | [**ClusterUpgradeGKEUpgradeFeatureState**](ClusterUpgradeGKEUpgradeFeatureState.md) |  | [optional] 
**ignored** | [**Dict[str, ClusterUpgradeIgnoredMembership]**](ClusterUpgradeIgnoredMembership.md) | A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: &#x60;projects/{p}/locations/{l}/membership/{m}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_fleet_state import ClusterUpgradeFleetState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeFleetState from a JSON string
cluster_upgrade_fleet_state_instance = ClusterUpgradeFleetState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeFleetState.to_json())

# convert the object into a dict
cluster_upgrade_fleet_state_dict = cluster_upgrade_fleet_state_instance.to_dict()
# create an instance of ClusterUpgradeFleetState from a dict
cluster_upgrade_fleet_state_from_dict = ClusterUpgradeFleetState.from_dict(cluster_upgrade_fleet_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


