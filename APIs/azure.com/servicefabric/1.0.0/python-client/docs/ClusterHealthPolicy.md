# ClusterHealthPolicy

The policy of the cluster health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_action** | **str** | The action of the failure | [optional] 
**force_restart** | **bool** | The flag of the force restart | [optional] 
**health_check_retry_timeout_in_milliseconds** | **str** | The milliseconds of the health check retry timeout | [optional] 
**health_check_stable_duration_in_milliseconds** | **str** | The milliseconds of the health check stable duration | [optional] 
**health_check_wait_duration_in_milliseconds** | **str** | The milliseconds of the health check wait duration | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] 
**upgrade_domain_timeout_in_milliseconds** | **str** | The milliseconds of the upgrade domain timeout | [optional] 
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The seconds of the upgrade replica set check timeout | [optional] 
**upgrade_timeout_in_milliseconds** | **str** | The milliseconds of the upgrade timeout | [optional] 

## Example

```python
from openapi_client.models.cluster_health_policy import ClusterHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthPolicy from a JSON string
cluster_health_policy_instance = ClusterHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthPolicy.to_json())

# convert the object into a dict
cluster_health_policy_dict = cluster_health_policy_instance.to_dict()
# create an instance of ClusterHealthPolicy from a dict
cluster_health_policy_from_dict = ClusterHealthPolicy.from_dict(cluster_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


