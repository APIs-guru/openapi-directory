# BillingPlansSelection

Selection of a billing plan for one or more services

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount.md) |  | [optional] 
**test_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_plans_selection import BillingPlansSelection

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPlansSelection from a JSON string
billing_plans_selection_instance = BillingPlansSelection.from_json(json)
# print the JSON string representation of the object
print(BillingPlansSelection.to_json())

# convert the object into a dict
billing_plans_selection_dict = billing_plans_selection_instance.to_dict()
# create an instance of BillingPlansSelection from a dict
billing_plans_selection_from_dict = BillingPlansSelection.from_dict(billing_plans_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


