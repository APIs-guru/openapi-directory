# ApplicationResourceUpgradeProgressInfo

This type describes an application resource upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_upgrade_status_details** | **str** | Additional detailed information about the status of the pending upgrade. | [optional] 
**failure_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade failed and FailureAction was executed. | [optional] 
**name** | **str** | Name of the Application resource. | [optional] 
**percent_completed** | **str** | The estimated percent of replicas are completed in the upgrade. | [optional] 
**rolling_upgrade_mode** | [**RollingUpgradeMode**](RollingUpgradeMode.md) |  | [optional] [default to RollingUpgradeMode.MONITORED]
**service_upgrade_progress** | [**List[ServiceUpgradeProgress]**](ServiceUpgradeProgress.md) | List of service upgrade progresses. | [optional] 
**start_timestamp_utc** | **str** | The estimated UTC datetime when the upgrade started. | [optional] 
**target_application_type_version** | **str** | The target application version for the application upgrade. | [optional] 
**upgrade_duration** | **str** | The estimated amount of time that the overall upgrade elapsed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H2M0S']
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] [default to 42949672925]
**upgrade_state** | [**ApplicationResourceUpgradeState**](ApplicationResourceUpgradeState.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_resource_upgrade_progress_info import ApplicationResourceUpgradeProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceUpgradeProgressInfo from a JSON string
application_resource_upgrade_progress_info_instance = ApplicationResourceUpgradeProgressInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceUpgradeProgressInfo.to_json())

# convert the object into a dict
application_resource_upgrade_progress_info_dict = application_resource_upgrade_progress_info_instance.to_dict()
# create an instance of ApplicationResourceUpgradeProgressInfo from a dict
application_resource_upgrade_progress_info_from_dict = ApplicationResourceUpgradeProgressInfo.from_dict(application_resource_upgrade_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


