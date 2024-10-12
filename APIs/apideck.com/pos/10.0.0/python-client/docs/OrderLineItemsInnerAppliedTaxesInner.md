# OrderLineItemsInnerAppliedTaxesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**tax_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_line_items_inner_applied_taxes_inner import OrderLineItemsInnerAppliedTaxesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemsInnerAppliedTaxesInner from a JSON string
order_line_items_inner_applied_taxes_inner_instance = OrderLineItemsInnerAppliedTaxesInner.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemsInnerAppliedTaxesInner.to_json())

# convert the object into a dict
order_line_items_inner_applied_taxes_inner_dict = order_line_items_inner_applied_taxes_inner_instance.to_dict()
# create an instance of OrderLineItemsInnerAppliedTaxesInner from a dict
order_line_items_inner_applied_taxes_inner_from_dict = OrderLineItemsInnerAppliedTaxesInner.from_dict(order_line_items_inner_applied_taxes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


