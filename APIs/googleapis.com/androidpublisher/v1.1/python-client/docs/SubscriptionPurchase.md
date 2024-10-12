# SubscriptionPurchase

A SubscriptionPurchase resource indicates the status of a user's subscription purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renewing** | **bool** | Whether the subscription will automatically be renewed when it reaches its current expiry time. | [optional] 
**initiation_timestamp_msec** | **str** | Time at which the subscription was granted, in milliseconds since the Epoch. | [optional] 
**kind** | **str** | This kind represents a subscriptionPurchase object in the androidpublisher service. | [optional] [default to 'androidpublisher#subscriptionPurchase']
**valid_until_timestamp_msec** | **str** | Time at which the subscription will expire, in milliseconds since the Epoch. | [optional] 

## Example

```python
from openapi_client.models.subscription_purchase import SubscriptionPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchase from a JSON string
subscription_purchase_instance = SubscriptionPurchase.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchase.to_json())

# convert the object into a dict
subscription_purchase_dict = subscription_purchase_instance.to_dict()
# create an instance of SubscriptionPurchase from a dict
subscription_purchase_from_dict = SubscriptionPurchase.from_dict(subscription_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


