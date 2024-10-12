# BillingAggregatedInformationGetByApp200ResponseBillingPlans

Billing Plans section in the Billing Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.md) |  | [optional] 
**test_service** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_billing_plans import BillingAggregatedInformationGetByApp200ResponseBillingPlans

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlans from a JSON string
billing_aggregated_information_get_by_app200_response_billing_plans_instance = BillingAggregatedInformationGetByApp200ResponseBillingPlans.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseBillingPlans.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_billing_plans_dict = billing_aggregated_information_get_by_app200_response_billing_plans_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlans from a dict
billing_aggregated_information_get_by_app200_response_billing_plans_from_dict = BillingAggregatedInformationGetByApp200ResponseBillingPlans.from_dict(billing_aggregated_information_get_by_app200_response_billing_plans_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


