# RollingUpgradeRunningStatus

Information about the current running state of the overall upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code indicating the current status of the upgrade. | [optional] [readonly] 
**last_action** | **str** | The last action performed on the rolling upgrade. | [optional] [readonly] 
**last_action_time** | **datetime** | Last action time of the upgrade. | [optional] [readonly] 
**start_time** | **datetime** | Start time of the upgrade. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rolling_upgrade_running_status import RollingUpgradeRunningStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradeRunningStatus from a JSON string
rolling_upgrade_running_status_instance = RollingUpgradeRunningStatus.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradeRunningStatus.to_json())

# convert the object into a dict
rolling_upgrade_running_status_dict = rolling_upgrade_running_status_instance.to_dict()
# create an instance of RollingUpgradeRunningStatus from a dict
rolling_upgrade_running_status_from_dict = RollingUpgradeRunningStatus.from_dict(rolling_upgrade_running_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


