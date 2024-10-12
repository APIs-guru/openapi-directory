# RollingUpgradeUpdateDescription

Describes the parameters for updating a rolling upgrade of application or cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_action** | [**FailureAction**](FailureAction.md) |  | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**health_check_retry_timeout_in_milliseconds** | **str** | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H10M0S']
**health_check_stable_duration_in_milliseconds** | **str** | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H2M0S']
**health_check_wait_duration_in_milliseconds** | **str** | The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to '0']
**replica_set_check_timeout_in_milliseconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [default to UpgradeMode.UNMONITOREDAUTO]
**upgrade_domain_timeout_in_milliseconds** | **str** | The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'P10675199DT02H48M05.4775807S']
**upgrade_timeout_in_milliseconds** | **str** | The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'P10675199DT02H48M05.4775807S']

## Example

```python
from openapi_client.models.rolling_upgrade_update_description import RollingUpgradeUpdateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradeUpdateDescription from a JSON string
rolling_upgrade_update_description_instance = RollingUpgradeUpdateDescription.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradeUpdateDescription.to_json())

# convert the object into a dict
rolling_upgrade_update_description_dict = rolling_upgrade_update_description_instance.to_dict()
# create an instance of RollingUpgradeUpdateDescription from a dict
rolling_upgrade_update_description_from_dict = RollingUpgradeUpdateDescription.from_dict(rolling_upgrade_update_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


