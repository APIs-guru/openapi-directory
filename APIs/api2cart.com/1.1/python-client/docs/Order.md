# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**basket_id** | **str** |  | [optional] 
**billing_address** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**bundles** | [**List[OrderItem]**](OrderItem.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 
**comment** | **str** |  | [optional] 
**create_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer** | [**BaseCustomer**](BaseCustomer.md) |  | [optional] 
**discounts** | [**List[OrderTotalsNewDiscount]**](OrderTotalsNewDiscount.md) |  | [optional] 
**finished_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**gift_message** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**order_details_url** | **str** |  | [optional] 
**order_id** | **str** |  | [optional] 
**order_products** | [**List[OrderItem]**](OrderItem.md) |  | [optional] 
**payment_method** | [**OrderPaymentMethod**](OrderPaymentMethod.md) |  | [optional] 
**refunds** | [**List[OrderRefund]**](OrderRefund.md) |  | [optional] 
**shipping_address** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**shipping_method** | [**OrderShippingMethod**](OrderShippingMethod.md) |  | [optional] 
**shipping_methods** | [**List[OrderShippingMethod]**](OrderShippingMethod.md) |  | [optional] 
**status** | [**OrderStatus**](OrderStatus.md) |  | [optional] 
**store_id** | **str** |  | [optional] 
**total** | [**OrderTotal**](OrderTotal.md) |  | [optional] 
**totals** | [**OrderTotals**](OrderTotals.md) |  | [optional] 
**warehouses_ids** | **List[str]** |  | [optional] 

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


