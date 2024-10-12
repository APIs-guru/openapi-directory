# OrderAddOrderItemInnerOrderItemPropertyInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_property_name** | **str** | Ordered product property name. Where x is order item ID, y is order item property ID | [optional] 
**order_item_property_value** | **str** | Ordered product property value. Where x is order item ID, y - order item property ID | [optional] 

## Example

```python
from openapi_client.models.order_add_order_item_inner_order_item_property_inner import OrderAddOrderItemInnerOrderItemPropertyInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAddOrderItemInnerOrderItemPropertyInner from a JSON string
order_add_order_item_inner_order_item_property_inner_instance = OrderAddOrderItemInnerOrderItemPropertyInner.from_json(json)
# print the JSON string representation of the object
print(OrderAddOrderItemInnerOrderItemPropertyInner.to_json())

# convert the object into a dict
order_add_order_item_inner_order_item_property_inner_dict = order_add_order_item_inner_order_item_property_inner_instance.to_dict()
# create an instance of OrderAddOrderItemInnerOrderItemPropertyInner from a dict
order_add_order_item_inner_order_item_property_inner_from_dict = OrderAddOrderItemInnerOrderItemPropertyInner.from_dict(order_add_order_item_inner_order_item_property_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


