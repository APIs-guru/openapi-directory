# StartClusterUpgradeDescription

Describes the parameters for starting a cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**ApplicationHealthPolicies**](ApplicationHealthPolicies.md) |  | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**cluster_upgrade_health_policy** | [**ClusterUpgradeHealthPolicyObject**](ClusterUpgradeHealthPolicyObject.md) |  | [optional] 
**code_version** | **str** | The cluster code version. | [optional] 
**config_version** | **str** | The cluster configuration version. | [optional] 
**enable_delta_health_evaluation** | **bool** | When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain. | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**instance_close_delay_duration_in_seconds** | **int** | Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description. See InstanceCloseDelayDurationSeconds property in $ref: \&quot;#/definitions/StatelessServiceDescription.yaml\&quot; for details. Note, the default value of InstanceCloseDelayDurationInSeconds is 4294967295, which indicates that the behavior will entirely depend on the delay configured in the stateless service description. | [optional] 
**monitoring_policy** | [**MonitoringPolicyDescription**](MonitoringPolicyDescription.md) |  | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**sort_order** | [**UpgradeSortOrder**](UpgradeSortOrder.md) |  | [optional] [default to UpgradeSortOrder.DEFAULT]
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [optional] [default to UpgradeKind.ROLLING]
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 

## Example

```python
from openapi_client.models.start_cluster_upgrade_description import StartClusterUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StartClusterUpgradeDescription from a JSON string
start_cluster_upgrade_description_instance = StartClusterUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(StartClusterUpgradeDescription.to_json())

# convert the object into a dict
start_cluster_upgrade_description_dict = start_cluster_upgrade_description_instance.to_dict()
# create an instance of StartClusterUpgradeDescription from a dict
start_cluster_upgrade_description_from_dict = StartClusterUpgradeDescription.from_dict(start_cluster_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


