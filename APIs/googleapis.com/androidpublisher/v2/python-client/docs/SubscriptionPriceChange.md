# SubscriptionPriceChange

Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_price** | [**Price**](Price.md) |  | [optional] 
**state** | **int** | The current state of the price change. Possible values are:   - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.  - Accepted: State for an accepted price change that the subscription will renew with unless it&#39;s canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next. | [optional] 

## Example

```python
from openapi_client.models.subscription_price_change import SubscriptionPriceChange

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPriceChange from a JSON string
subscription_price_change_instance = SubscriptionPriceChange.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPriceChange.to_json())

# convert the object into a dict
subscription_price_change_dict = subscription_price_change_instance.to_dict()
# create an instance of SubscriptionPriceChange from a dict
subscription_price_change_from_dict = SubscriptionPriceChange.from_dict(subscription_price_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


