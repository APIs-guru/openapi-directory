# ServiceBillingPlans

Billing Plans for a single service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_select_trial_plan** | **bool** | Can customer select trial plan for that service (if it exists)? | [optional] 
**current_billing_period** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriod.md) |  | [optional] 
**last_trial_plan_expiration_time** | **str** | Expiration time of the last selected trial plan. Will be null if trial plan was not used. | [optional] 

## Example

```python
from openapi_client.models.service_billing_plans import ServiceBillingPlans

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBillingPlans from a JSON string
service_billing_plans_instance = ServiceBillingPlans.from_json(json)
# print the JSON string representation of the object
print(ServiceBillingPlans.to_json())

# convert the object into a dict
service_billing_plans_dict = service_billing_plans_instance.to_dict()
# create an instance of ServiceBillingPlans from a dict
service_billing_plans_from_dict = ServiceBillingPlans.from_dict(service_billing_plans_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


