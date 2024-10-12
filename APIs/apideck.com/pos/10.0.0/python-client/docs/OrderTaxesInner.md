# OrderTaxesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**auto_applied** | **bool** | Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]() | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The tax&#39;s name. | [optional] 
**percentage** | **float** |  | [optional] 
**scope** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_taxes_inner import OrderTaxesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTaxesInner from a JSON string
order_taxes_inner_instance = OrderTaxesInner.from_json(json)
# print the JSON string representation of the object
print(OrderTaxesInner.to_json())

# convert the object into a dict
order_taxes_inner_dict = order_taxes_inner_instance.to_dict()
# create an instance of OrderTaxesInner from a dict
order_taxes_inner_from_dict = OrderTaxesInner.from_dict(order_taxes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


