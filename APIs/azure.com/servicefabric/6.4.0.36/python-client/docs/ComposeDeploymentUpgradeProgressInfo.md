# ComposeDeploymentUpgradeProgressInfo

Describes the parameters for a compose deployment upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**application_name** | **str** | The name of the target application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**application_unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**application_upgrade_status_details** | **str** | Additional details of application upgrade including failure message. | [optional] 
**current_upgrade_domain_duration** | **str** | The estimated amount of time spent processing current Upgrade Domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H2M0S']
**current_upgrade_domain_progress** | [**CurrentUpgradeDomainProgressInfo**](CurrentUpgradeDomainProgressInfo.md) |  | [optional] 
**deployment_name** | **str** | The name of the target deployment. | [optional] 
**failure_reason** | [**FailureReason**](FailureReason.md) |  | [optional] 
**failure_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade failed and FailureAction was executed. | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**monitoring_policy** | [**MonitoringPolicyDescription**](MonitoringPolicyDescription.md) |  | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**start_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade started. | [optional] 
**target_application_type_version** | **str** | The target application type version (found in the application manifest) for the application upgrade. | [optional] 
**upgrade_domain_progress_at_failure** | [**FailureUpgradeDomainProgressInfo**](FailureUpgradeDomainProgressInfo.md) |  | [optional] 
**upgrade_duration** | **str** | The estimated amount of time that the overall upgrade elapsed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H2M0S']
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [optional] [default to UpgradeKind.ROLLING]
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 
**upgrade_state** | [**ComposeDeploymentUpgradeState**](ComposeDeploymentUpgradeState.md) |  | [optional] 
**upgrade_status_details** | **str** | Additional detailed information about the status of the pending upgrade. | [optional] 

## Example

```python
from openapi_client.models.compose_deployment_upgrade_progress_info import ComposeDeploymentUpgradeProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeDeploymentUpgradeProgressInfo from a JSON string
compose_deployment_upgrade_progress_info_instance = ComposeDeploymentUpgradeProgressInfo.from_json(json)
# print the JSON string representation of the object
print(ComposeDeploymentUpgradeProgressInfo.to_json())

# convert the object into a dict
compose_deployment_upgrade_progress_info_dict = compose_deployment_upgrade_progress_info_instance.to_dict()
# create an instance of ComposeDeploymentUpgradeProgressInfo from a dict
compose_deployment_upgrade_progress_info_from_dict = ComposeDeploymentUpgradeProgressInfo.from_dict(compose_deployment_upgrade_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


