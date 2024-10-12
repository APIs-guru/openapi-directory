# ClusterUpgradePolicy

Describes the policy used when upgrading the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delta_health_policy** | [**ClusterUpgradeDeltaHealthPolicy**](ClusterUpgradeDeltaHealthPolicy.md) |  | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] 
**health_check_retry_timeout** | **str** | The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 
**health_check_stable_duration** | **str** | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 
**health_check_wait_duration** | **str** | The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 
**health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | 
**upgrade_domain_timeout** | **str** | The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 
**upgrade_replica_set_check_timeout** | **str** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 
**upgrade_timeout** | **str** | The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | 

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


