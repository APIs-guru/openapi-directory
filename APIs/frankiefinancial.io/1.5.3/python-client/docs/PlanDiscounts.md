# PlanDiscounts

Conditional discounts that may be applied to plan. These values can be used to modify the estimatedBaseCost for client-side filtering and reordering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_debit** | **float** | Direct Debit discount amount | [optional] 
**pay_on_time** | **float** | Pay On Time discount amount | [optional] 

## Example

```python
from openapi_client.models.plan_discounts import PlanDiscounts

# TODO update the JSON string below
json = "{}"
# create an instance of PlanDiscounts from a JSON string
plan_discounts_instance = PlanDiscounts.from_json(json)
# print the JSON string representation of the object
print(PlanDiscounts.to_json())

# convert the object into a dict
plan_discounts_dict = plan_discounts_instance.to_dict()
# create an instance of PlanDiscounts from a dict
plan_discounts_from_dict = PlanDiscounts.from_dict(plan_discounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


