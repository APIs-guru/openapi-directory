# ClusterUpgradePolicy

Cluster upgrade policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delta_health_policy** | [**ClusterUpgradeDeltaHealthPolicy**](ClusterUpgradeDeltaHealthPolicy.md) |  | [optional] 
**force_restart** | **bool** | Force node to restart or not | [optional] 
**health_check_retry_timeout** | **str** | The length of time that health checks can fail continuously,it represents .Net TimeSpan | 
**health_check_stable_duration** | **str** | The length of time that health checks must pass continuously,it represents .Net TimeSpan | 
**health_check_wait_duration** | **str** | The length of time to wait after completing an upgrade domain before performing health checks, it represents .Net TimeSpan | 
**health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | 
**override_user_upgrade_policy** | **bool** | Use the user defined upgrade policy or not | [optional] 
**upgrade_domain_timeout** | **str** | The timeout for any upgrade domain,it represents .Net TimeSpan | 
**upgrade_replica_set_check_timeout** | **str** | Timeout for replica set upgrade to complete,it represents .Net TimeSpan | 
**upgrade_timeout** | **str** | The upgrade timeout,it represents .Net TimeSpan | 

## Example

```python
from openapi_client.models.cluster_upgrade_policy import ClusterUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradePolicy from a JSON string
cluster_upgrade_policy_instance = ClusterUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradePolicy.to_json())

# convert the object into a dict
cluster_upgrade_policy_dict = cluster_upgrade_policy_instance.to_dict()
# create an instance of ClusterUpgradePolicy from a dict
cluster_upgrade_policy_from_dict = ClusterUpgradePolicy.from_dict(cluster_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


