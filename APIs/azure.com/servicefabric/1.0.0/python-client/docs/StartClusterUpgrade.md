# StartClusterUpgrade

The description of the start cluster upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**ApplicationHealthPolicyMap**](ApplicationHealthPolicyMap.md) |  | [optional] 
**cluster_upgrade_health_policy** | [**ClusterUpgradeHealthPolicy**](ClusterUpgradeHealthPolicy.md) |  | [optional] 
**code_version** | **str** | The version of the code | [optional] 
**config_version** | **str** | The version of the config | [optional] 
**enable_delta_health_evaluation** | **bool** | The evaluation of the enable delta health | [optional] 
**force_restart** | **bool** | The flag of the force restart | [optional] 
**monitoring_policy** | **object** | The policy of the monitoring | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] 
**upgrade_kind** | **str** | The kind of the upgrade | [optional] 
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The seconds of the upgrade replica set check timeout | [optional] 

## Example

```python
from openapi_client.models.start_cluster_upgrade import StartClusterUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of StartClusterUpgrade from a JSON string
start_cluster_upgrade_instance = StartClusterUpgrade.from_json(json)
# print the JSON string representation of the object
print(StartClusterUpgrade.to_json())

# convert the object into a dict
start_cluster_upgrade_dict = start_cluster_upgrade_instance.to_dict()
# create an instance of StartClusterUpgrade from a dict
start_cluster_upgrade_from_dict = StartClusterUpgrade.from_dict(start_cluster_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


