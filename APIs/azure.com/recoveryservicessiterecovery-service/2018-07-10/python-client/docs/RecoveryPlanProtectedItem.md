# RecoveryPlanProtectedItem

Recovery plan protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ARM Id of the recovery plan protected item. | [optional] 
**virtual_machine_id** | **str** | The virtual machine Id. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_protected_item import RecoveryPlanProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanProtectedItem from a JSON string
recovery_plan_protected_item_instance = RecoveryPlanProtectedItem.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanProtectedItem.to_json())

# convert the object into a dict
recovery_plan_protected_item_dict = recovery_plan_protected_item_instance.to_dict()
# create an instance of RecoveryPlanProtectedItem from a dict
recovery_plan_protected_item_from_dict = RecoveryPlanProtectedItem.from_dict(recovery_plan_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


