# ArmPlan

The plan object in an ARM, represents a marketplace plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name | [optional] 
**product** | **str** | The product | [optional] 
**promotion_code** | **str** | The promotion code | [optional] 
**publisher** | **str** | The publisher | [optional] 
**version** | **str** | Version of product | [optional] 

## Example

```python
from openapi_client.models.arm_plan import ArmPlan

# TODO update the JSON string below
json = "{}"
# create an instance of ArmPlan from a JSON string
arm_plan_instance = ArmPlan.from_json(json)
# print the JSON string representation of the object
print(ArmPlan.to_json())

# convert the object into a dict
arm_plan_dict = arm_plan_instance.to_dict()
# create an instance of ArmPlan from a dict
arm_plan_from_dict = ArmPlan.from_dict(arm_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


