# RecoveryPlan

Recovery plan details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPlanProperties**](RecoveryPlanProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.recovery_plan import RecoveryPlan

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlan from a JSON string
recovery_plan_instance = RecoveryPlan.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlan.to_json())

# convert the object into a dict
recovery_plan_dict = recovery_plan_instance.to_dict()
# create an instance of RecoveryPlan from a dict
recovery_plan_from_dict = RecoveryPlan.from_dict(recovery_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


