# OrderFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | [**List[OrderAdditionalFields]**](OrderAdditionalFields.md) | Array of additional fields for the given Order | [optional] 
**additional_information** | **str** | Additional information for the given Order | [optional] 
**billing_address** | [**OrderBillingAddress**](OrderBillingAddress.md) |  | [optional] 
**checkout_url** | **str** | Store Checkout Order URL for the given Order | [optional] 
**coupons** | **str** | Promotion Coupons used on the given Order | [optional] 
**created_at** | **str** | Order date | [optional] 
**currency** | **str** | Currency of the Order | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**discount** | **float** | Discount value for the given Order | [optional] 
**duplicate_url** | **str** | Duplicate Order URL for the given Order | [optional] 
**external_shipping_rate_id** | **str** | Rate id for selected External Shipping Method rate | [optional] 
**id** | **int** | Unique identifier of the Order | [optional] 
**payment_information** | **str** | Payment information for the given Order | [optional] 
**payment_method_name** | **str** | Payment Method name used e.g. PayPal | [optional] 
**payment_method_type** | **str** | Payment Method type used e.g. paypal | [optional] 
**products** | [**List[OrderProduct]**](OrderProduct.md) |  | [optional] 
**recovery_url** | **str** | Recovery Order URL for the given Order | [optional] 
**shipment_status** | **str** | Shipment Status for Order Fulfillment. | [optional] 
**shipping** | **float** | Shipping value for the given Order | [optional] 
**shipping_address** | [**OrderShippingAddress**](OrderShippingAddress.md) |  | [optional] 
**shipping_discount** | **float** | Shipping Discount value for the given order | [optional] 
**shipping_method_id** | **int** | Shipping method e.g. Royal Mail | [optional] 
**shipping_method_name** | **str** | Shipping method e.g. Royal Mail | [optional] 
**shipping_option** | **str** | Shipping option for this order. | [optional] 
**shipping_required** | **bool** | False if the order is digital. | [optional] [default to True]
**shipping_tax** | **float** | Shipping Tax value for the given order | [optional] 
**shipping_taxes** | [**List[OrderShippingTax]**](OrderShippingTax.md) |  | [optional] 
**source** | [**TrafficSource**](TrafficSource.md) |  | [optional] 
**status** | **str** | Status of the Order | [optional] 
**subtotal** | **float** | Subtotal value for the given Order. Excluding taxes, shipping and discounts | [optional] 
**tax** | **float** | Tax value for the given order | [optional] 
**total** | **float** | Total value for the given Order. Including taxes, shipping and discounts | [optional] 
**tracking_company** | **str** | Company Used for Order Fulfillment. | [optional] 
**tracking_number** | **str** | Tracking Number for Order Fulfillment. | [optional] 
**tracking_url** | **str** | Tracking URL for Order Fulfillment. | [optional] 

## Example

```python
from openapi_client.models.order_fields import OrderFields

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFields from a JSON string
order_fields_instance = OrderFields.from_json(json)
# print the JSON string representation of the object
print(OrderFields.to_json())

# convert the object into a dict
order_fields_dict = order_fields_instance.to_dict()
# create an instance of OrderFields from a dict
order_fields_from_dict = OrderFields.from_dict(order_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


