# APIPlanSubscriptionOut

The API Plan governing the subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | User API Key. | [optional] 
**currency** | **str** | Current plan Currency for prices. | [optional] 
**currency_factor** | **float** | For USD, GBP, EUR - the factor is 1. | [optional] 
**plan_base_fees_key** | **str** | Current plan key (as in Stripe product). | [optional] 
**plan_ended** | **int** | Datetime when the user ended the plan. | [optional] 
**plan_name** | **str** | Current plan name. | [optional] 
**plan_quota** | **int** | Current plan quota in quantity of units (NB: some API use several units per name). | [optional] 
**plan_started** | **int** | Datetime when the user subscribed to the current plan. | [optional] 
**plan_status** | **str** | Plan status. | [optional] 
**price** | **float** | Current plan price for overages expressed in Currency (extra price per unit above the free quota). | [optional] 
**price_overage** | **float** | Current plan price for overages expressed in Currency (extra price per unit above the free quota). | [optional] 
**price_overage_usd** | **float** | Current plan price for overages expressed in USD (extra price per unit above the free quota). | [optional] 
**price_usd** | **float** | Current plan monthly price expressed in USD (includes a free quota). | [optional] 
**prior_plan_started** | **int** | Datetime when the user subscribed to the prior plan. | [optional] 
**stripe_customer_id** | **str** | Stripe customer identifier. | [optional] 
**stripe_status** | **str** | Stripe status ex active. | [optional] 
**stripe_subscription** | **str** | Stripe subscription identifier. | [optional] 
**tax_rate** | **float** | Applicable tax rate for the plan. | [optional] 
**user_id** | **str** | Internal user identifier. | [optional] 

## Example

```python
from openapi_client.models.api_plan_subscription_out import APIPlanSubscriptionOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIPlanSubscriptionOut from a JSON string
api_plan_subscription_out_instance = APIPlanSubscriptionOut.from_json(json)
# print the JSON string representation of the object
print(APIPlanSubscriptionOut.to_json())

# convert the object into a dict
api_plan_subscription_out_dict = api_plan_subscription_out_instance.to_dict()
# create an instance of APIPlanSubscriptionOut from a dict
api_plan_subscription_out_from_dict = APIPlanSubscriptionOut.from_dict(api_plan_subscription_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


