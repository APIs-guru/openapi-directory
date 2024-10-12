# OrderLineItemsInnerAppliedDiscountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**discount_id** | **str** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_line_items_inner_applied_discounts_inner import OrderLineItemsInnerAppliedDiscountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemsInnerAppliedDiscountsInner from a JSON string
order_line_items_inner_applied_discounts_inner_instance = OrderLineItemsInnerAppliedDiscountsInner.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemsInnerAppliedDiscountsInner.to_json())

# convert the object into a dict
order_line_items_inner_applied_discounts_inner_dict = order_line_items_inner_applied_discounts_inner_instance.to_dict()
# create an instance of OrderLineItemsInnerAppliedDiscountsInner from a dict
order_line_items_inner_applied_discounts_inner_from_dict = OrderLineItemsInnerAppliedDiscountsInner.from_dict(order_line_items_inner_applied_discounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


