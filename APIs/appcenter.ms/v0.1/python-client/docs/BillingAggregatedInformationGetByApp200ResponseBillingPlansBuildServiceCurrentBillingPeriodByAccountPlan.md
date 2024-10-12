# BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan

Billing Plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, object]** | Collection of attribute values. | [optional] 
**id** | **str** | The Billing Plan ID | [optional] 
**limits** | **Dict[str, float]** | A collection of named numeric values | [optional] 
**parent_id** | **str** |  | [optional] 
**payment_source** | **str** | Service that receives payments for this billing plan. | [optional] 
**price** | **float** | Price of the Billing Plan | [optional] 
**service** | **str** | Name of the service that the plan applies to. | [optional] 
**version** | **str** | Version of the Billing Plan schema | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan import BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan from a JSON string
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan_instance = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan_dict = billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan from a dict
billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan_from_dict = BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.from_dict(billing_aggregated_information_get_by_app200_response_billing_plans_build_service_current_billing_period_by_account_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


