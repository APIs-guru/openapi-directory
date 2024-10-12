# ClusterUpgradeGKEUpgradeFeatureCondition

GKEUpgradeFeatureCondition describes the condition of the feature for GKE clusters at a certain point of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Reason why the feature is in this status. | [optional] 
**status** | **str** | Status of the condition, one of True, False, Unknown. | [optional] 
**type** | **str** | Type of the condition, for example, \&quot;ready\&quot;. | [optional] 
**update_time** | **str** | Last timestamp the condition was updated. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_gke_upgrade_feature_condition import ClusterUpgradeGKEUpgradeFeatureCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeGKEUpgradeFeatureCondition from a JSON string
cluster_upgrade_gke_upgrade_feature_condition_instance = ClusterUpgradeGKEUpgradeFeatureCondition.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeGKEUpgradeFeatureCondition.to_json())

# convert the object into a dict
cluster_upgrade_gke_upgrade_feature_condition_dict = cluster_upgrade_gke_upgrade_feature_condition_instance.to_dict()
# create an instance of ClusterUpgradeGKEUpgradeFeatureCondition from a dict
cluster_upgrade_gke_upgrade_feature_condition_from_dict = ClusterUpgradeGKEUpgradeFeatureCondition.from_dict(cluster_upgrade_gke_upgrade_feature_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


