# APIBillingPeriodUsageOut

The current billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | User API Key. | [optional] 
**billing_status** | **str** | Current period billing status ex OPEN. | [optional] 
**hard_limit** | **int** | Current period hard limit (reaching the limit sends an email notification and blocks the API Key). | [optional] 
**period_ended** | **int** | Datetime when the the plan&#39;s current period endend. | [optional] 
**period_started** | **int** | Datetime when the the plan&#39;s current period started. | [optional] 
**soft_limit** | **int** | Current period soft limit (reaching the limit sends an email notification). | [optional] 
**stripe_current_period_end** | **int** | Datetime when the the plan&#39;s current period endend (in Stripe). Internal and Stripe periodicity should ~coincide. | [optional] 
**stripe_current_period_start** | **int** | Datetime when the the plan&#39;s current period started (in Stripe). Internal and Stripe periodicity should ~coincide. | [optional] 
**subscription_started** | **int** | Datetime when the user subscribed to the plan. | [optional] 
**usage** | **int** | Current period usage in units (NB some API endpoints use more than one unit). | [optional] 

## Example

```python
from openapi_client.models.api_billing_period_usage_out import APIBillingPeriodUsageOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIBillingPeriodUsageOut from a JSON string
api_billing_period_usage_out_instance = APIBillingPeriodUsageOut.from_json(json)
# print the JSON string representation of the object
print(APIBillingPeriodUsageOut.to_json())

# convert the object into a dict
api_billing_period_usage_out_dict = api_billing_period_usage_out_instance.to_dict()
# create an instance of APIBillingPeriodUsageOut from a dict
api_billing_period_usage_out_from_dict = APIBillingPeriodUsageOut.from_dict(api_billing_period_usage_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


