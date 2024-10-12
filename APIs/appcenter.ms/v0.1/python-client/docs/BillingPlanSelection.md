# BillingPlanSelection

Selection of a billing plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of instances of the billing plan. | [optional] 
**plan** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_plan_selection import BillingPlanSelection

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPlanSelection from a JSON string
billing_plan_selection_instance = BillingPlanSelection.from_json(json)
# print the JSON string representation of the object
print(BillingPlanSelection.to_json())

# convert the object into a dict
billing_plan_selection_dict = billing_plan_selection_instance.to_dict()
# create an instance of BillingPlanSelection from a dict
billing_plan_selection_from_dict = BillingPlanSelection.from_dict(billing_plan_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


