# SubscriptionPurchase

A SubscriptionPurchase resource indicates the status of a user's subscription purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renewing** | **bool** | Whether the subscription will automatically be renewed when it reaches its current expiry time. | [optional] 
**cancel_reason** | **int** | The reason why a subscription was canceled or is not auto-renewing. Possible values are:   - User canceled the subscription  - Subscription was canceled by the system, for example because of a billing problem  - Subscription was replaced with a new subscription  - Subscription was canceled by the developer | [optional] 
**cancel_survey_result** | [**SubscriptionCancelSurveyResult**](SubscriptionCancelSurveyResult.md) |  | [optional] 
**country_code** | **str** | ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. | [optional] 
**developer_payload** | **str** | A developer-specified string that contains supplemental information about an order. | [optional] 
**email_address** | **str** | The email address of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;. | [optional] 
**expiry_time_millis** | **str** | Time at which the subscription will expire, in milliseconds since the Epoch. | [optional] 
**family_name** | **str** | The family name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;. | [optional] 
**given_name** | **str** | The given name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;. | [optional] 
**kind** | **str** | This kind represents a subscriptionPurchase object in the androidpublisher service. | [optional] [default to 'androidpublisher#subscriptionPurchase']
**linked_purchase_token** | **str** | The purchase token of the originating purchase if this subscription is one of the following:   - Re-signup of a canceled but non-lapsed subscription  - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set. | [optional] 
**order_id** | **str** | The order id of the latest recurring order associated with the purchase of the subscription. | [optional] 
**payment_state** | **int** | The payment state of the subscription. Possible values are:   - Payment pending  - Payment received  - Free trial  - Pending deferred upgrade/downgrade | [optional] 
**price_amount_micros** | **str** | Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. | [optional] 
**price_change** | [**SubscriptionPriceChange**](SubscriptionPriceChange.md) |  | [optional] 
**price_currency_code** | **str** | ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is \&quot;GBP\&quot;. | [optional] 
**profile_id** | **str** | The Google profile id of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;. | [optional] 
**profile_name** | **str** | The profile name of the user when the subscription was purchased. Only present for purchases made with &#39;Subscribe with Google&#39;. | [optional] 
**purchase_type** | **int** | The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:   - Test (i.e. purchased from a license testing account)  - Promo (i.e. purchased using a promo code) | [optional] 
**start_time_millis** | **str** | Time at which the subscription was granted, in milliseconds since the Epoch. | [optional] 
**user_cancellation_time_millis** | **str** | The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. | [optional] 

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


