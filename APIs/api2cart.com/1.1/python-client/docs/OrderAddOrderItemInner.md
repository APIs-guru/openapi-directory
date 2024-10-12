# OrderAddOrderItemInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_allow_refund_items_separately** | **bool** | Indicates whether subitems of the grouped/bundle product can be refunded separately | [optional] 
**order_item_allow_ship_items_separately** | **bool** | Indicates whether subitems of the grouped/bundle product can be shipped separately | [optional] 
**order_item_id** | **str** | Defines orders specified by order item id | 
**order_item_model** | **str** | Defines orders specified by order item model | [optional] 
**order_item_name** | **str** | Defines orders specified by order item name | 
**order_item_option** | [**List[OrderAddOrderItemInnerOrderItemOptionInner]**](OrderAddOrderItemInnerOrderItemOptionInner.md) |  | [optional] 
**order_item_parent** | **int** | Index of the parent grouped/bundle product | [optional] 
**order_item_parent_option_name** | **str** | Option name of the parent grouped/bundle product | [optional] 
**order_item_price** | **float** | Defines orders specified by order item price | 
**order_item_price_includes_tax** | **bool** | Defines if item price includes tax | [optional] [default to False]
**order_item_property** | [**List[OrderAddOrderItemInnerOrderItemPropertyInner]**](OrderAddOrderItemInnerOrderItemPropertyInner.md) |  | [optional] 
**order_item_quantity** | **int** | Defines orders specified by order item quantity | 
**order_item_tax** | **float** | Percentage of tax for product order | [optional] [default to 0]
**order_item_variant_id** | **str** | Ordered product variant. Where x is order item ID | [optional] 
**order_item_weight** | **float** | Defines orders specified by order item weight | [optional] 

## Example

```python
from openapi_client.models.order_add_order_item_inner import OrderAddOrderItemInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAddOrderItemInner from a JSON string
order_add_order_item_inner_instance = OrderAddOrderItemInner.from_json(json)
# print the JSON string representation of the object
print(OrderAddOrderItemInner.to_json())

# convert the object into a dict
order_add_order_item_inner_dict = order_add_order_item_inner_instance.to_dict()
# create an instance of OrderAddOrderItemInner from a dict
order_add_order_item_inner_from_dict = OrderAddOrderItemInner.from_dict(order_add_order_item_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


