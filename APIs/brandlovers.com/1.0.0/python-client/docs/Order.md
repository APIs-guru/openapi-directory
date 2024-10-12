# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_at** | **datetime** | Date that this order was approved for fullfilment | [optional] 
**billing_address** | [**Address**](Address.md) |  | 
**created_at** | **datetime** | Date that this order was created | 
**customer** | [**Customer**](Customer.md) |  | 
**freight** | [**Freight**](Freight.md) |  | 
**items** | [**List[OrderItem]**](OrderItem.md) |  | 
**order_id** | **str** | Unique order Id (related to this seller) | 
**order_marketplace_id** | **str** | Unique Order Id that will be displayed to the customer. This Id is not the same as &#x60;orderId&#x60; | 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**shipments** | [**List[Shippment]**](Shippment.md) |  | 
**shipping_address** | [**Address**](Address.md) |  | 
**status** | **str** | Order status | 
**total_amount** | **int** | Order total in cents, this is what the customer will be charged for. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 
**total_discount_amount** | **int** | Total order discounts in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 
**total_items_amount** | **int** | Order items total amount in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 
**total_shipping_amount** | **int** | Total shipments amount items. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 
**updated_at** | **datetime** | Last update data of this order | 

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


