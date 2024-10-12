# ClusterUpgradeProgress

The progress of the cluster upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** |  | [optional] 
**config_version** | **str** |  | [optional] 
**current_upgrade_domain_progress** | [**ApplicationUpgradeCurrentUpgradeDomainProgress**](ApplicationUpgradeCurrentUpgradeDomainProgress.md) |  | [optional] 
**failure_reason** | [**FailureReason**](FailureReason.md) |  | [optional] 
**failure_timestamp_utc** | **str** |  | [optional] 
**next_upgrade_domain** | **str** |  | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] 
**start_timestamp_utc** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 
**upgrade_domain_duration_in_milliseconds** | **str** |  | [optional] 
**upgrade_domain_progress_at_failure** | [**ClusterUpgradeProgressUpgradeDomainProgressAtFailure**](ClusterUpgradeProgressUpgradeDomainProgressAtFailure.md) |  | [optional] 
**upgrade_domains** | **List[str]** |  | [optional] 
**upgrade_duration_in_milliseconds** | **str** |  | [optional] 
**upgrade_state** | [**UpgradeState**](UpgradeState.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_progress import ClusterUpgradeProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeProgress from a JSON string
cluster_upgrade_progress_instance = ClusterUpgradeProgress.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeProgress.to_json())

# convert the object into a dict
cluster_upgrade_progress_dict = cluster_upgrade_progress_instance.to_dict()
# create an instance of ClusterUpgradeProgress from a dict
cluster_upgrade_progress_from_dict = ClusterUpgradeProgress.from_dict(cluster_upgrade_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


