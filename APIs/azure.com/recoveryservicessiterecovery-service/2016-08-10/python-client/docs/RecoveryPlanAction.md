# RecoveryPlanAction

Recovery plan action details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_name** | **str** | The action name. | 
**custom_details** | [**RecoveryPlanActionDetails**](RecoveryPlanActionDetails.md) |  | 
**failover_directions** | **List[str]** | The list of failover directions. | 
**failover_types** | **List[str]** | The list of failover types. | 

## Example

```python
from openapi_client.models.recovery_plan_action import RecoveryPlanAction

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanAction from a JSON string
recovery_plan_action_instance = RecoveryPlanAction.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanAction.to_json())

# convert the object into a dict
recovery_plan_action_dict = recovery_plan_action_instance.to_dict()
# create an instance of RecoveryPlanAction from a dict
recovery_plan_action_from_dict = RecoveryPlanAction.from_dict(recovery_plan_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


