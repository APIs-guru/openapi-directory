# OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_option_id** | **str** | Product Option ID. Where x is order item ID, y is order item option ID | [optional] 
**order_item_option_name** | **str** | Ordered Product Option Name. Where x is order item ID, y is order item option ID | [optional] 
**order_item_option_used_in_combinations** | **bool** | Product option used in combinations flag, where x is order item ID, y - order item option ID | [optional] 
**order_item_option_value** | **str** | Ordered product option value Where x is order item ID, y - order item option ID | [optional] 
**order_item_option_value_id** | **str** | Product option value ID, where x is order item ID, y - order item option ID | [optional] 

## Example

```python
from openapi_client.models.order_preestimate_shipping_list_order_item_inner_order_item_option_inner import OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner from a JSON string
order_preestimate_shipping_list_order_item_inner_order_item_option_inner_instance = OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.from_json(json)
# print the JSON string representation of the object
print(OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.to_json())

# convert the object into a dict
order_preestimate_shipping_list_order_item_inner_order_item_option_inner_dict = order_preestimate_shipping_list_order_item_inner_order_item_option_inner_instance.to_dict()
# create an instance of OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner from a dict
order_preestimate_shipping_list_order_item_inner_order_item_option_inner_from_dict = OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.from_dict(order_preestimate_shipping_list_order_item_inner_order_item_option_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


