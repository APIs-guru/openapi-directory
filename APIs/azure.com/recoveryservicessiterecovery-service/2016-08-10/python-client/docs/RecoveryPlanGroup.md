# RecoveryPlanGroup

Recovery plan group details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_group_actions** | [**List[RecoveryPlanAction]**](RecoveryPlanAction.md) | The end group actions. | [optional] 
**group_type** | **str** | The group type. | 
**replication_protected_items** | [**List[RecoveryPlanProtectedItem]**](RecoveryPlanProtectedItem.md) | The list of protected items. | [optional] 
**start_group_actions** | [**List[RecoveryPlanAction]**](RecoveryPlanAction.md) | The start group actions. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_group import RecoveryPlanGroup

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanGroup from a JSON string
recovery_plan_group_instance = RecoveryPlanGroup.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanGroup.to_json())

# convert the object into a dict
recovery_plan_group_dict = recovery_plan_group_instance.to_dict()
# create an instance of RecoveryPlanGroup from a dict
recovery_plan_group_from_dict = RecoveryPlanGroup.from_dict(recovery_plan_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


