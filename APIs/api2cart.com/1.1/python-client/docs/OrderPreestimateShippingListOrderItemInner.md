# OrderPreestimateShippingListOrderItemInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_item_id** | **str** | Defines orders specified by order item id | 
**order_item_model** | **str** | Defines orders specified by order item model | [optional] 
**order_item_option** | [**List[OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner]**](OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.md) |  | [optional] 
**order_item_quantity** | **int** | Defines orders specified by order item quantity | 
**order_item_variant_id** | **str** | Ordered product variant. Where x is order item ID | [optional] 
**order_item_weight** | **float** | Defines orders specified by order item weight | [optional] 

## Example

```python
from openapi_client.models.order_preestimate_shipping_list_order_item_inner import OrderPreestimateShippingListOrderItemInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPreestimateShippingListOrderItemInner from a JSON string
order_preestimate_shipping_list_order_item_inner_instance = OrderPreestimateShippingListOrderItemInner.from_json(json)
# print the JSON string representation of the object
print(OrderPreestimateShippingListOrderItemInner.to_json())

# convert the object into a dict
order_preestimate_shipping_list_order_item_inner_dict = order_preestimate_shipping_list_order_item_inner_instance.to_dict()
# create an instance of OrderPreestimateShippingListOrderItemInner from a dict
order_preestimate_shipping_list_order_item_inner_from_dict = OrderPreestimateShippingListOrderItemInner.from_dict(order_preestimate_shipping_list_order_item_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


