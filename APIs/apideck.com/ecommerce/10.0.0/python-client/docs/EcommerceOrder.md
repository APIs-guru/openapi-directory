# EcommerceOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**EcommerceAddress**](EcommerceAddress.md) |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer** | [**LinkedEcommerceCustomer**](LinkedEcommerceCustomer.md) |  | [optional] 
**discounts** | [**List[EcommerceDiscount]**](EcommerceDiscount.md) |  | [optional] 
**fulfillment_status** | **str** | Current fulfillment status of the order. | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**line_items** | [**List[EcommerceOrderLineItem]**](EcommerceOrderLineItem.md) |  | [optional] 
**note** | **str** | Note for the order. | [optional] 
**order_number** | **str** | Order number, if any. | [optional] 
**payment_method** | **str** | Payment method used for this order. | [optional] 
**payment_status** | **str** | Current payment status of the order. | [optional] 
**shipping_address** | [**EcommerceAddress**](EcommerceAddress.md) |  | [optional] 
**shipping_cost** | **str** | Shipping cost, if any. | [optional] 
**status** | [**EcommerceOrderStatus**](EcommerceOrderStatus.md) |  | [optional] 
**sub_total** | **str** | Sub-total amount, normally before tax. | [optional] 
**total_amount** | **str** | Total amount due. | [optional] 
**total_discount** | **str** | Total discount, if any. | [optional] 
**total_tax** | **str** | Total tax, if any. | [optional] 
**tracking** | [**List[TrackingItem]**](TrackingItem.md) |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ecommerce_order import EcommerceOrder

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceOrder from a JSON string
ecommerce_order_instance = EcommerceOrder.from_json(json)
# print the JSON string representation of the object
print(EcommerceOrder.to_json())

# convert the object into a dict
ecommerce_order_dict = ecommerce_order_instance.to_dict()
# create an instance of EcommerceOrder from a dict
ecommerce_order_from_dict = EcommerceOrder.from_dict(ecommerce_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


