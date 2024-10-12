# OrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freight** | [**Freight**](Freight.md) |  | 
**gift_wrap** | [**OrderGiftWrap**](OrderGiftWrap.md) |  | [optional] 
**id** | **str** | Unique Id representing this item | 
**name** | **str** | Product name | 
**promotions** | [**List[Promotion]**](Promotion.md) | Promotions array | [optional] 
**sale_price** | **int** | Product unit price | 
**sent** | **bool** | Flag if product was already shipped | 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system | 

## Example

```python
from openapi_client.models.order_item import OrderItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItem from a JSON string
order_item_instance = OrderItem.from_json(json)
# print the JSON string representation of the object
print(OrderItem.to_json())

# convert the object into a dict
order_item_dict = order_item_instance.to_dict()
# create an instance of OrderItem from a dict
order_item_from_dict = OrderItem.from_dict(order_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


