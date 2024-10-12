# BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService

Billing Plans for a single service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_select_trial_plan** | **bool** | Can customer select trial plan for that service (if it exists)? | [optional] 
**current_billing_period** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod.md) |  | [optional] 
**last_trial_plan_expiration_time** | **str** | Expiration time of the last selected trial plan. Will be null if trial plan was not used. | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_billing_plans_build_service import BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService from a JSON string
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_instance = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_dict = billing_aggregated_information_get_by_app200_response_billing_plans_build_service_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService from a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_from_dict = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildService.from_dict(billing_aggregated_information_get_by_app200_response_billing_plans_build_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


