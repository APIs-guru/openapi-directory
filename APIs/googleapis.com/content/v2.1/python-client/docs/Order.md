# Order

Order. Production access (all methods) requires the order manager role. Sandbox access does not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged** | **bool** | Whether the order was acknowledged. | [optional] 
**annotations** | [**List[OrderOrderAnnotation]**](OrderOrderAnnotation.md) | List of key-value pairs that are attached to a given order. | [optional] 
**billing_address** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**customer** | [**OrderCustomer**](OrderCustomer.md) |  | [optional] 
**delivery_details** | [**OrderDeliveryDetails**](OrderDeliveryDetails.md) |  | [optional] 
**id** | **str** | The REST ID of the order. Globally unique. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#order&#x60;\&quot; | [optional] 
**line_items** | [**List[OrderLineItem]**](OrderLineItem.md) | Line items that are ordered. | [optional] 
**merchant_id** | **str** |  | [optional] 
**merchant_order_id** | **str** | Merchant-provided ID of the order. | [optional] 
**net_price_amount** | [**Price**](Price.md) |  | [optional] 
**net_tax_amount** | [**Price**](Price.md) |  | [optional] 
**payment_status** | **str** | The status of the payment. Acceptable values are: - \&quot;&#x60;paymentCaptured&#x60;\&quot; - \&quot;&#x60;paymentRejected&#x60;\&quot; - \&quot;&#x60;paymentSecured&#x60;\&quot; - \&quot;&#x60;pendingAuthorization&#x60;\&quot;  | [optional] 
**pickup_details** | [**OrderPickupDetails**](OrderPickupDetails.md) |  | [optional] 
**placed_date** | **str** | The date when the order was placed, in ISO 8601 format. | [optional] 
**promotions** | [**List[OrderPromotion]**](OrderPromotion.md) | Promotions associated with the order. To determine which promotions apply to which products, check the &#x60;Promotions[].appliedItems[].lineItemId&#x60; field against the &#x60;LineItems[].id&#x60; field for each promotion. If a promotion is applied to more than 1 offerId, divide the discount value by the number of affected offers to determine how much discount to apply to each offerId. Examples: 1. To calculate price paid by the customer for a single line item including the discount: For each promotion, subtract the &#x60;LineItems[].adjustments[].priceAdjustment.value&#x60; amount from the &#x60;LineItems[].Price.value&#x60;. 2. To calculate price paid by the customer for a single line item including the discount in case of multiple quantity: For each promotion, divide the &#x60;LineItems[].adjustments[].priceAdjustment.value&#x60; by the quantity of products then subtract the resulting value from the &#x60;LineItems[].Product.Price.value&#x60; for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here. | [optional] 
**refunds** | [**List[OrderRefund]**](OrderRefund.md) | Refunds for the order. | [optional] 
**shipments** | [**List[OrderShipment]**](OrderShipment.md) | Shipments of the order. | [optional] 
**shipping_cost** | [**Price**](Price.md) |  | [optional] 
**shipping_cost_tax** | [**Price**](Price.md) |  | [optional] 
**status** | **str** | The status of the order. Acceptable values are: - \&quot;&#x60;canceled&#x60;\&quot; - \&quot;&#x60;delivered&#x60;\&quot; - \&quot;&#x60;inProgress&#x60;\&quot; - \&quot;&#x60;partiallyDelivered&#x60;\&quot; - \&quot;&#x60;partiallyReturned&#x60;\&quot; - \&quot;&#x60;partiallyShipped&#x60;\&quot; - \&quot;&#x60;pendingShipment&#x60;\&quot; - \&quot;&#x60;returned&#x60;\&quot; - \&quot;&#x60;shipped&#x60;\&quot;  | [optional] 
**tax_collector** | **str** | The party responsible for collecting and remitting taxes. Acceptable values are: - \&quot;&#x60;marketplaceFacilitator&#x60;\&quot; - \&quot;&#x60;merchant&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


