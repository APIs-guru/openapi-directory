# ApplicationUpgradePolicy

Describes the policy for a monitored application upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**rolling_upgrade_monitoring_policy** | [**RollingUpgradeMonitoringPolicy**](RollingUpgradeMonitoringPolicy.md) |  | [optional] 
**upgrade_replica_set_check_timeout** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 

## Example

```python
from openapi_client.models.application_upgrade_policy import ApplicationUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradePolicy from a JSON string
application_upgrade_policy_instance = ApplicationUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradePolicy.to_json())

# convert the object into a dict
application_upgrade_policy_dict = application_upgrade_policy_instance.to_dict()
# create an instance of ApplicationUpgradePolicy from a dict
application_upgrade_policy_from_dict = ApplicationUpgradePolicy.from_dict(application_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


