# ClusterUpgradeProgressObject

Information about a cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The ServiceFabric code version of the cluster. | [optional] 
**config_version** | **str** | The cluster configuration version (specified in the cluster manifest). | [optional] 
**current_upgrade_domain_progress** | [**CurrentUpgradeDomainProgressInfo**](CurrentUpgradeDomainProgressInfo.md) |  | [optional] 
**failure_reason** | [**FailureReason**](FailureReason.md) |  | [optional] 
**failure_timestamp_utc** | **str** | The failure time of the upgrade in UTC. | [optional] 
**next_upgrade_domain** | **str** | The name of the next upgrade domain to be processed. | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**start_timestamp_utc** | **str** | The start time of the upgrade in UTC. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**upgrade_description** | [**ClusterUpgradeDescriptionObject**](ClusterUpgradeDescriptionObject.md) |  | [optional] 
**upgrade_domain_duration_in_milliseconds** | **str** | The estimated elapsed time spent processing the current upgrade domain. | [optional] 
**upgrade_domain_progress_at_failure** | [**FailedUpgradeDomainProgressObject**](FailedUpgradeDomainProgressObject.md) |  | [optional] 
**upgrade_domains** | [**List[UpgradeDomainInfo]**](UpgradeDomainInfo.md) | List of upgrade domains and their statuses. | [optional] 
**upgrade_duration_in_milliseconds** | **str** | The estimated elapsed time spent processing the current overall upgrade. | [optional] 
**upgrade_state** | [**UpgradeState**](UpgradeState.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_progress_object import ClusterUpgradeProgressObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeProgressObject from a JSON string
cluster_upgrade_progress_object_instance = ClusterUpgradeProgressObject.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeProgressObject.to_json())

# convert the object into a dict
cluster_upgrade_progress_object_dict = cluster_upgrade_progress_object_instance.to_dict()
# create an instance of ClusterUpgradeProgressObject from a dict
cluster_upgrade_progress_object_from_dict = ClusterUpgradeProgressObject.from_dict(cluster_upgrade_progress_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


