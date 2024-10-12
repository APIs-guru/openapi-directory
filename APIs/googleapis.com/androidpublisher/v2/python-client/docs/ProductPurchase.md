# ProductPurchase

A ProductPurchase resource indicates the status of a user's inapp product purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumption_state** | **int** | The consumption state of the inapp product. Possible values are:   - Yet to be consumed  - Consumed | [optional] 
**developer_payload** | **str** | A developer-specified string that contains supplemental information about an order. | [optional] 
**kind** | **str** | This kind represents an inappPurchase object in the androidpublisher service. | [optional] [default to 'androidpublisher#productPurchase']
**order_id** | **str** | The order id associated with the purchase of the inapp product. | [optional] 
**purchase_state** | **int** | The purchase state of the order. Possible values are:   - Purchased  - Canceled  - Pending | [optional] 
**purchase_time_millis** | **str** | The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). | [optional] 
**purchase_type** | **int** | The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:   - Test (i.e. purchased from a license testing account)  - Promo (i.e. purchased using a promo code)  - Rewarded (i.e. from watching a video ad instead of paying) | [optional] 

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


