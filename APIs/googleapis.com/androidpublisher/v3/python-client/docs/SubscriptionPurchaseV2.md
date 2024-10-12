# SubscriptionPurchaseV2

Indicates the status of a user's subscription purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_state** | **str** | The acknowledgement state of the subscription. | [optional] 
**canceled_state_context** | [**CanceledStateContext**](CanceledStateContext.md) |  | [optional] 
**external_account_identifiers** | [**ExternalAccountIdentifiers**](ExternalAccountIdentifiers.md) |  | [optional] 
**kind** | **str** | This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service. | [optional] 
**latest_order_id** | **str** | The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token. | [optional] 
**line_items** | [**List[SubscriptionPurchaseLineItem]**](SubscriptionPurchaseLineItem.md) | Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan. | [optional] 
**linked_purchase_token** | **str** | The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription. | [optional] 
**paused_state_context** | [**PausedStateContext**](PausedStateContext.md) |  | [optional] 
**region_code** | **str** | ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. | [optional] 
**start_time** | **str** | Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup). | [optional] 
**subscribe_with_google_info** | [**SubscribeWithGoogleInfo**](SubscribeWithGoogleInfo.md) |  | [optional] 
**subscription_state** | **str** | The current state of the subscription. | [optional] 
**test_purchase** | **object** | Whether this subscription purchase is a test purchase. | [optional] 

## Example

```python
from openapi_client.models.subscription_purchase_v2 import SubscriptionPurchaseV2

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchaseV2 from a JSON string
subscription_purchase_v2_instance = SubscriptionPurchaseV2.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchaseV2.to_json())

# convert the object into a dict
subscription_purchase_v2_dict = subscription_purchase_v2_instance.to_dict()
# create an instance of SubscriptionPurchaseV2 from a dict
subscription_purchase_v2_from_dict = SubscriptionPurchaseV2.from_dict(subscription_purchase_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


