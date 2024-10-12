# ClusterUpgradeGKEUpgradeFeatureState

GKEUpgradeFeatureState contains feature states for GKE clusters in the scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[ClusterUpgradeGKEUpgradeFeatureCondition]**](ClusterUpgradeGKEUpgradeFeatureCondition.md) | Current conditions of the feature. | [optional] 
**upgrade_state** | [**List[ClusterUpgradeGKEUpgradeState]**](ClusterUpgradeGKEUpgradeState.md) | Upgrade state. It will eventually replace &#x60;state&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_gke_upgrade_feature_state import ClusterUpgradeGKEUpgradeFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeGKEUpgradeFeatureState from a JSON string
cluster_upgrade_gke_upgrade_feature_state_instance = ClusterUpgradeGKEUpgradeFeatureState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeGKEUpgradeFeatureState.to_json())

# convert the object into a dict
cluster_upgrade_gke_upgrade_feature_state_dict = cluster_upgrade_gke_upgrade_feature_state_instance.to_dict()
# create an instance of ClusterUpgradeGKEUpgradeFeatureState from a dict
cluster_upgrade_gke_upgrade_feature_state_from_dict = ClusterUpgradeGKEUpgradeFeatureState.from_dict(cluster_upgrade_gke_upgrade_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


