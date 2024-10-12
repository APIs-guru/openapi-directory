# OrderAddOrderItemInnerOrderItemOptionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_option_name** | **str** | Ordered Product Option Name. Where x is order item ID, y is order item option ID | [optional] 
**order_item_option_price** | **float** | Ordered product option price Where x is order item ID, y - order item option ID | [optional] 
**order_item_option_value** | **str** | Ordered product option value Where x is order item ID, y - order item option ID | [optional] 

## Example

```python
from openapi_client.models.order_add_order_item_inner_order_item_option_inner import OrderAddOrderItemInnerOrderItemOptionInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAddOrderItemInnerOrderItemOptionInner from a JSON string
order_add_order_item_inner_order_item_option_inner_instance = OrderAddOrderItemInnerOrderItemOptionInner.from_json(json)
# print the JSON string representation of the object
print(OrderAddOrderItemInnerOrderItemOptionInner.to_json())

# convert the object into a dict
order_add_order_item_inner_order_item_option_inner_dict = order_add_order_item_inner_order_item_option_inner_instance.to_dict()
# create an instance of OrderAddOrderItemInnerOrderItemOptionInner from a dict
order_add_order_item_inner_order_item_option_inner_from_dict = OrderAddOrderItemInnerOrderItemOptionInner.from_dict(order_add_order_item_inner_order_item_option_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


