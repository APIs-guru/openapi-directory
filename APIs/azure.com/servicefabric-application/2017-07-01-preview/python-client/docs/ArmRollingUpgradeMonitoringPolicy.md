# ArmRollingUpgradeMonitoringPolicy

The policy used for monitoring the application upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_action** | **str** | The activation Mode of the service package | [optional] 
**health_check_retry_timeout** | **str** | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H10M0S']
**health_check_stable_duration** | **str** | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'PT0H2M0S']
**health_check_wait_duration** | **str** | The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to '0']
**upgrade_domain_timeout** | **str** | The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'P10675199DT02H48M05.4775807S']
**upgrade_timeout** | **str** | The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | [optional] [default to 'P10675199DT02H48M05.4775807S']

## Example

```python
from openapi_client.models.arm_rolling_upgrade_monitoring_policy import ArmRollingUpgradeMonitoringPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ArmRollingUpgradeMonitoringPolicy from a JSON string
arm_rolling_upgrade_monitoring_policy_instance = ArmRollingUpgradeMonitoringPolicy.from_json(json)
# print the JSON string representation of the object
print(ArmRollingUpgradeMonitoringPolicy.to_json())

# convert the object into a dict
arm_rolling_upgrade_monitoring_policy_dict = arm_rolling_upgrade_monitoring_policy_instance.to_dict()
# create an instance of ArmRollingUpgradeMonitoringPolicy from a dict
arm_rolling_upgrade_monitoring_policy_from_dict = ArmRollingUpgradeMonitoringPolicy.from_dict(arm_rolling_upgrade_monitoring_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


