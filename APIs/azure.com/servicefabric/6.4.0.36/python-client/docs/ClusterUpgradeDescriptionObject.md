# ClusterUpgradeDescriptionObject

Represents a ServiceFabric cluster upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**List[ApplicationHealthPolicyMapItem]**](ApplicationHealthPolicyMapItem.md) | Defines a map that contains specific application health policies for different applications. Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health. If an application is not specified in the map, the application health evaluation uses the ApplicationHealthPolicy found in its application manifest or the default application health policy (if no health policy is defined in the manifest). The map is empty by default. | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**cluster_upgrade_health_policy** | [**ClusterUpgradeHealthPolicyObject**](ClusterUpgradeHealthPolicyObject.md) |  | [optional] 
**code_version** | **str** | The ServiceFabric code version of the cluster. | [optional] 
**config_version** | **str** | The cluster configuration version (specified in the cluster manifest). | [optional] 
**enable_delta_health_evaluation** | **bool** | When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain. | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**monitoring_policy** | [**MonitoringPolicyDescription**](MonitoringPolicyDescription.md) |  | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [optional] [default to UpgradeKind.ROLLING]
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_description_object import ClusterUpgradeDescriptionObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeDescriptionObject from a JSON string
cluster_upgrade_description_object_instance = ClusterUpgradeDescriptionObject.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeDescriptionObject.to_json())

# convert the object into a dict
cluster_upgrade_description_object_dict = cluster_upgrade_description_object_instance.to_dict()
# create an instance of ClusterUpgradeDescriptionObject from a dict
cluster_upgrade_description_object_from_dict = ClusterUpgradeDescriptionObject.from_dict(cluster_upgrade_description_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


