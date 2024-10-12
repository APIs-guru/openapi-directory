# ClusterUpgradeFleetSpec

**ClusterUpgrade**: The configuration for the fleet-level ClusterUpgrade feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_upgrade_overrides** | [**List[ClusterUpgradeGKEUpgradeOverride]**](ClusterUpgradeGKEUpgradeOverride.md) | Allow users to override some properties of each GKE upgrade. | [optional] 
**post_conditions** | [**ClusterUpgradePostConditions**](ClusterUpgradePostConditions.md) |  | [optional] 
**upstream_fleets** | **List[str]** | This fleet consumes upgrades that have COMPLETE status code in the upstream fleets. See UpgradeStatus.Code for code definitions. The fleet name should be either fleet project number or id. This is defined as repeated for future proof reasons. Initial implementation will enforce at most one upstream fleet. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_fleet_spec import ClusterUpgradeFleetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeFleetSpec from a JSON string
cluster_upgrade_fleet_spec_instance = ClusterUpgradeFleetSpec.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeFleetSpec.to_json())

# convert the object into a dict
cluster_upgrade_fleet_spec_dict = cluster_upgrade_fleet_spec_instance.to_dict()
# create an instance of ClusterUpgradeFleetSpec from a dict
cluster_upgrade_fleet_spec_from_dict = ClusterUpgradeFleetSpec.from_dict(cluster_upgrade_fleet_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


