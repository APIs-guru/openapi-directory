# RecoveryPlanGroupTaskDetails

This class represents the recovery plan group task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The group identifier. | [optional] 
**name** | **str** | The name. | [optional] 
**rp_group_type** | **str** | The group type. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_group_task_details import RecoveryPlanGroupTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanGroupTaskDetails from a JSON string
recovery_plan_group_task_details_instance = RecoveryPlanGroupTaskDetails.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanGroupTaskDetails.to_json())

# convert the object into a dict
recovery_plan_group_task_details_dict = recovery_plan_group_task_details_instance.to_dict()
# create an instance of RecoveryPlanGroupTaskDetails from a dict
recovery_plan_group_task_details_from_dict = RecoveryPlanGroupTaskDetails.from_dict(recovery_plan_group_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


