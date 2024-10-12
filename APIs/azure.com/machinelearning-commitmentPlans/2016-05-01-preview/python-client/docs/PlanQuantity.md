# PlanQuantity

Represents the quantity a commitment plan provides of a metered resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowance** | **float** | The quantity added to the commitment plan at an interval specified by its allowance frequency. | [optional] [readonly] 
**amount** | **float** | The quantity available to the plan the last time usage was calculated. | [optional] [readonly] 
**included_quantity_meter** | **str** | The Azure meter for usage against included quantities. | [optional] [readonly] 
**overage_meter** | **str** | The Azure meter for usage which exceeds included quantities. | [optional] [readonly] 

## Example

```python
from openapi_client.models.plan_quantity import PlanQuantity

# TODO update the JSON string below
json = "{}"
# create an instance of PlanQuantity from a JSON string
plan_quantity_instance = PlanQuantity.from_json(json)
# print the JSON string representation of the object
print(PlanQuantity.to_json())

# convert the object into a dict
plan_quantity_dict = plan_quantity_instance.to_dict()
# create an instance of PlanQuantity from a dict
plan_quantity_from_dict = PlanQuantity.from_dict(plan_quantity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


