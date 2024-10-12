# SubscriptionPurchasesDeferResponse

Response for the purchases.subscriptions.defer API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_expiry_time_millis** | **str** | The new expiry time for the subscription in milliseconds since the Epoch. | [optional] 

## Example

```python
from openapi_client.models.subscription_purchases_defer_response import SubscriptionPurchasesDeferResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchasesDeferResponse from a JSON string
subscription_purchases_defer_response_instance = SubscriptionPurchasesDeferResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchasesDeferResponse.to_json())

# convert the object into a dict
subscription_purchases_defer_response_dict = subscription_purchases_defer_response_instance.to_dict()
# create an instance of SubscriptionPurchasesDeferResponse from a dict
subscription_purchases_defer_response_from_dict = SubscriptionPurchasesDeferResponse.from_dict(subscription_purchases_defer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


