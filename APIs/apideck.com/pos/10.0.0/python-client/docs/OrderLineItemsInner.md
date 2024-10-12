# OrderLineItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_discounts** | [**List[OrderLineItemsInnerAppliedDiscountsInner]**](OrderLineItemsInnerAppliedDiscountsInner.md) |  | [optional] 
**applied_taxes** | [**List[OrderLineItemsInnerAppliedTaxesInner]**](OrderLineItemsInnerAppliedTaxesInner.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**item** | [**VariationsInner**](VariationsInner.md) |  | [optional] 
**modifiers** | [**List[OrderLineItemsInnerModifiersInner]**](OrderLineItemsInnerModifiersInner.md) | Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts | [optional] 
**name** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**total_amount** | **int** |  | [optional] 
**total_discount** | **int** |  | [optional] 
**total_tax** | **int** |  | [optional] 
**unit_price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_line_items_inner import OrderLineItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemsInner from a JSON string
order_line_items_inner_instance = OrderLineItemsInner.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemsInner.to_json())

# convert the object into a dict
order_line_items_inner_dict = order_line_items_inner_instance.to_dict()
# create an instance of OrderLineItemsInner from a dict
order_line_items_inner_from_dict = OrderLineItemsInner.from_dict(order_line_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


