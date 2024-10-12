# SubscriptionPurchasesDeferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deferral_info** | [**SubscriptionDeferralInfo**](SubscriptionDeferralInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_purchases_defer_request import SubscriptionPurchasesDeferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchasesDeferRequest from a JSON string
subscription_purchases_defer_request_instance = SubscriptionPurchasesDeferRequest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchasesDeferRequest.to_json())

# convert the object into a dict
subscription_purchases_defer_request_dict = subscription_purchases_defer_request_instance.to_dict()
# create an instance of SubscriptionPurchasesDeferRequest from a dict
subscription_purchases_defer_request_from_dict = SubscriptionPurchasesDeferRequest.from_dict(subscription_purchases_defer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


