# RepairTaskHistory

A record of the times when the repair task entered each state.  This type supports the Service Fabric platform; it is not meant to be used directly from your code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_utc_timestamp** | **datetime** | The time when the repair task entered the Approved state | [optional] 
**claimed_utc_timestamp** | **datetime** | The time when the repair task entered the Claimed state. | [optional] 
**completed_utc_timestamp** | **datetime** | The time when the repair task entered the Completed state | [optional] 
**created_utc_timestamp** | **datetime** | The time when the repair task entered the Created state. | [optional] 
**executing_utc_timestamp** | **datetime** | The time when the repair task entered the Executing state | [optional] 
**preparing_health_check_end_utc_timestamp** | **datetime** | The time when the repair task completed the health check in the Preparing state. | [optional] 
**preparing_health_check_start_utc_timestamp** | **datetime** | The time when the repair task started the health check in the Preparing state. | [optional] 
**preparing_utc_timestamp** | **datetime** | The time when the repair task entered the Preparing state. | [optional] 
**restoring_health_check_end_utc_timestamp** | **datetime** | The time when the repair task completed the health check in the Restoring state. | [optional] 
**restoring_health_check_start_utc_timestamp** | **datetime** | The time when the repair task started the health check in the Restoring state. | [optional] 
**restoring_utc_timestamp** | **datetime** | The time when the repair task entered the Restoring state | [optional] 

## Example

```python
from openapi_client.models.repair_task_history import RepairTaskHistory

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskHistory from a JSON string
repair_task_history_instance = RepairTaskHistory.from_json(json)
# print the JSON string representation of the object
print(RepairTaskHistory.to_json())

# convert the object into a dict
repair_task_history_dict = repair_task_history_instance.to_dict()
# create an instance of RepairTaskHistory from a dict
repair_task_history_from_dict = RepairTaskHistory.from_dict(repair_task_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


