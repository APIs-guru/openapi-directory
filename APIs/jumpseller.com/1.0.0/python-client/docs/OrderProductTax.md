# OrderProductTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed** | **bool** | False if rate is a percentage and true if rate is monetary | [optional] [default to False]
**id** | **int** | Unique identifier of the Order Product Tax | [optional] 
**name** | **str** | Name of the category that the tax is associated with or the tax name | [optional] 
**rate** | **float** | Tax rate | [optional] 
**tax_on_product_price** | **bool** | False if tax is not included on product price | [optional] [default to False]

## Example

```python
from openapi_client.models.order_product_tax import OrderProductTax

# TODO update the JSON string below
json = "{}"
# create an instance of OrderProductTax from a JSON string
order_product_tax_instance = OrderProductTax.from_json(json)
# print the JSON string representation of the object
print(OrderProductTax.to_json())

# convert the object into a dict
order_product_tax_dict = order_product_tax_instance.to_dict()
# create an instance of OrderProductTax from a dict
order_product_tax_from_dict = OrderProductTax.from_dict(order_product_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


