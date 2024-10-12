# SubscriptionPurchaseLineItem

Item-level info for a subscription purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renewing_plan** | [**AutoRenewingPlan**](AutoRenewingPlan.md) |  | [optional] 
**deferred_item_replacement** | [**DeferredItemReplacement**](DeferredItemReplacement.md) |  | [optional] 
**expiry_time** | **str** | Time at which the subscription expired or will expire unless the access is extended (ex. renews). | [optional] 
**offer_details** | [**OfferDetails**](OfferDetails.md) |  | [optional] 
**prepaid_plan** | [**PrepaidPlan**](PrepaidPlan.md) |  | [optional] 
**product_id** | **str** | The purchased product ID (for example, &#39;monthly001&#39;). | [optional] 

## Example

```python
from openapi_client.models.subscription_purchase_line_item import SubscriptionPurchaseLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchaseLineItem from a JSON string
subscription_purchase_line_item_instance = SubscriptionPurchaseLineItem.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchaseLineItem.to_json())

# convert the object into a dict
subscription_purchase_line_item_dict = subscription_purchase_line_item_instance.to_dict()
# create an instance of SubscriptionPurchaseLineItem from a dict
subscription_purchase_line_item_from_dict = SubscriptionPurchaseLineItem.from_dict(subscription_purchase_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


