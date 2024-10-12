# ApplicationUpgradeProgressInfo

Describes the parameters for an application upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_upgrade_domain_progress** | [**CurrentUpgradeDomainProgressInfo**](CurrentUpgradeDomainProgressInfo.md) |  | [optional] 
**failure_reason** | [**FailureReason**](FailureReason.md) |  | [optional] 
**failure_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade failed and FailureAction was executed. | [optional] 
**name** | **str** | The name of the target application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**next_upgrade_domain** | **str** | The name of the next upgrade domain to be processed. | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**start_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade started. | [optional] 
**target_application_type_version** | **str** | The target application type version (found in the application manifest) for the application upgrade. | [optional] 
**type_name** | **str** | The application type name as defined in the application manifest. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**upgrade_description** | [**ApplicationUpgradeDescription**](ApplicationUpgradeDescription.md) |  | [optional] 
**upgrade_domain_duration_in_milliseconds** | **str** | The estimated total amount of time spent processing the current upgrade domain. | [optional] 
**upgrade_domain_progress_at_failure** | [**FailureUpgradeDomainProgressInfo**](FailureUpgradeDomainProgressInfo.md) |  | [optional] 
**upgrade_domains** | [**List[UpgradeDomainInfo]**](UpgradeDomainInfo.md) | List of upgrade domains and their statuses. | [optional] 
**upgrade_duration_in_milliseconds** | **str** | The estimated total amount of time spent processing the overall upgrade. | [optional] 
**upgrade_state** | [**UpgradeState**](UpgradeState.md) |  | [optional] 
**upgrade_status_details** | **str** | Additional detailed information about the status of the pending upgrade. | [optional] 

## Example

```python
from openapi_client.models.application_upgrade_progress_info import ApplicationUpgradeProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeProgressInfo from a JSON string
application_upgrade_progress_info_instance = ApplicationUpgradeProgressInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeProgressInfo.to_json())

# convert the object into a dict
application_upgrade_progress_info_dict = application_upgrade_progress_info_instance.to_dict()
# create an instance of ApplicationUpgradeProgressInfo from a dict
application_upgrade_progress_info_from_dict = ApplicationUpgradeProgressInfo.from_dict(application_upgrade_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


