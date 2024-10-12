# UpgradeOperationHistoryStatus

Information about the current running state of the overall upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code indicating the current status of the upgrade. | [optional] [readonly] 
**end_time** | **datetime** | End time of the upgrade. | [optional] [readonly] 
**start_time** | **datetime** | Start time of the upgrade. | [optional] [readonly] 

## Example

```python
from openapi_client.models.upgrade_operation_history_status import UpgradeOperationHistoryStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOperationHistoryStatus from a JSON string
upgrade_operation_history_status_instance = UpgradeOperationHistoryStatus.from_json(json)
# print the JSON string representation of the object
print(UpgradeOperationHistoryStatus.to_json())

# convert the object into a dict
upgrade_operation_history_status_dict = upgrade_operation_history_status_instance.to_dict()
# create an instance of UpgradeOperationHistoryStatus from a dict
upgrade_operation_history_status_from_dict = UpgradeOperationHistoryStatus.from_dict(upgrade_operation_history_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


