# BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod

Billing plans for a given period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_account** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount.md) |  | [optional] 
**end_time** | **str** | Exclusive end of the period. | [optional] 
**start_time** | **str** | Inclusive start of the period | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period import BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod from a JSON string
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_instance = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_dict = billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod from a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_from_dict = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod.from_dict(billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


