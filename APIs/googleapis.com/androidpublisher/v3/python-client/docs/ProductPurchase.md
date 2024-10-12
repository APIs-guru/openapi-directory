# ProductPurchase

A ProductPurchase resource indicates the status of a user's inapp product purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_state** | **int** | The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged | [optional] 
**consumption_state** | **int** | The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed | [optional] 
**developer_payload** | **str** | A developer-specified string that contains supplemental information about an order. | [optional] 
**kind** | **str** | This kind represents an inappPurchase object in the androidpublisher service. | [optional] 
**obfuscated_external_account_id** | **str** | An obfuscated version of the id that is uniquely associated with the user&#39;s account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. | [optional] 
**obfuscated_external_profile_id** | **str** | An obfuscated version of the id that is uniquely associated with the user&#39;s profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. | [optional] 
**order_id** | **str** | The order id associated with the purchase of the inapp product. | [optional] 
**product_id** | **str** | The inapp product SKU. May not be present. | [optional] 
**purchase_state** | **int** | The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending | [optional] 
**purchase_time_millis** | **str** | The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). | [optional] 
**purchase_token** | **str** | The purchase token generated to identify this purchase. May not be present. | [optional] 
**purchase_type** | **int** | The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying) | [optional] 
**quantity** | **int** | The quantity associated with the purchase of the inapp product. If not present, the quantity is 1. | [optional] 
**region_code** | **str** | ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted. | [optional] 

## Example

```python
from openapi_client.models.product_purchase import ProductPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPurchase from a JSON string
product_purchase_instance = ProductPurchase.from_json(json)
# print the JSON string representation of the object
print(ProductPurchase.to_json())

# convert the object into a dict
product_purchase_dict = product_purchase_instance.to_dict()
# create an instance of ProductPurchase from a dict
product_purchase_from_dict = ProductPurchase.from_dict(product_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


