# OrderLineItemsInnerModifiersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_name** | **str** |  | [optional] 
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** |  | [optional] 
**modifier_group_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_line_items_inner_modifiers_inner import OrderLineItemsInnerModifiersInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemsInnerModifiersInner from a JSON string
order_line_items_inner_modifiers_inner_instance = OrderLineItemsInnerModifiersInner.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemsInnerModifiersInner.to_json())

# convert the object into a dict
order_line_items_inner_modifiers_inner_dict = order_line_items_inner_modifiers_inner_instance.to_dict()
# create an instance of OrderLineItemsInnerModifiersInner from a dict
order_line_items_inner_modifiers_inner_from_dict = OrderLineItemsInnerModifiersInner.from_dict(order_line_items_inner_modifiers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


