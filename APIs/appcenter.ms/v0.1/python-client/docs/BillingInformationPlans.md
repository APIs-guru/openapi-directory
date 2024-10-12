# BillingInformationPlans

Billing Plans section in the Billing Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.md) |  | [optional] 
**test_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_information_plans import BillingInformationPlans

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInformationPlans from a JSON string
billing_information_plans_instance = BillingInformationPlans.from_json(json)
# print the JSON string representation of the object
print(BillingInformationPlans.to_json())

# convert the object into a dict
billing_information_plans_dict = billing_information_plans_instance.to_dict()
# create an instance of BillingInformationPlans from a dict
billing_information_plans_from_dict = BillingInformationPlans.from_dict(billing_information_plans_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


