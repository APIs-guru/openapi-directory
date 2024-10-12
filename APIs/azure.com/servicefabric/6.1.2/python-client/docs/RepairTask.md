# RepairTask

Represents a repair task, which includes information about what kind of repair was requested, what its progress is, and what its final result was.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The requested repair action. Must be specified when the repair task is created, and is immutable once set.  | 
**description** | **str** | A description of the purpose of the repair task, or other informational details. May be set when the repair task is created, and is immutable once set.  | [optional] 
**executor** | **str** | The name of the repair executor. Must be specified in Claimed and later states, and is immutable once set. | [optional] 
**executor_data** | **str** | A data string that the repair executor can use to store its internal state. | [optional] 
**flags** | **int** | A bitwise-OR of the following values, which gives additional details about the status of the repair task. - 1 - Cancellation of the repair has been requested - 2 - Abort of the repair has been requested - 4 - Approval of the repair was forced via client request  | [optional] 
**history** | [**RepairTaskHistory**](RepairTaskHistory.md) |  | [optional] 
**impact** | [**RepairImpactDescriptionBase**](RepairImpactDescriptionBase.md) |  | [optional] 
**perform_preparing_health_check** | **bool** | A value to determine if health checks will be performed when the repair task enters the Preparing state. | [optional] 
**perform_restoring_health_check** | **bool** | A value to determine if health checks will be performed when the repair task enters the Restoring state. | [optional] 
**preparing_health_check_state** | [**RepairTaskHealthCheckState**](RepairTaskHealthCheckState.md) |  | [optional] 
**restoring_health_check_state** | [**RepairTaskHealthCheckState**](RepairTaskHealthCheckState.md) |  | [optional] 
**result_code** | **int** | A numeric value providing additional details about the result of the repair task execution. May be specified in the Restoring and later states, and is immutable once set.  | [optional] 
**result_details** | **str** | A string providing additional details about the result of the repair task execution. May be specified in the Restoring and later states, and is immutable once set.  | [optional] 
**result_status** | **str** | A value describing the overall result of the repair task execution. Must be specified in the Restoring and later states, and is immutable once set. | [optional] 
**state** | **str** | The workflow state of the repair task. Valid initial states are Created, Claimed, and Preparing. | 
**target** | [**RepairTargetDescriptionBase**](RepairTargetDescriptionBase.md) |  | [optional] 
**task_id** | **str** | The ID of the repair task. | 
**version** | **str** | The version of the repair task. When creating a new repair task, the version must be set to zero.  When updating a repair task, the version is used for optimistic concurrency checks.  If the version is set to zero, the update will not check for write conflicts.  If the version is set to a non-zero value, then the update will only succeed if the actual current version of the repair task matches this value.  | [optional] 

## Example

```python
from openapi_client.models.repair_task import RepairTask

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTask from a JSON string
repair_task_instance = RepairTask.from_json(json)
# print the JSON string representation of the object
print(RepairTask.to_json())

# convert the object into a dict
repair_task_dict = repair_task_instance.to_dict()
# create an instance of RepairTask from a dict
repair_task_from_dict = RepairTask.from_dict(repair_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


