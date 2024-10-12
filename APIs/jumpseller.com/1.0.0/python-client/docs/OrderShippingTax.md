# OrderShippingTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Code of the associated country | [optional] 
**fixed** | **bool** | False if rate is a percentage and true if rate is monetary | [optional] [default to False]
**id** | **int** | Unique identifier of the Order Shipping Tax | [optional] 
**name** | **str** | Tax name | [optional] 
**rate** | **float** | Tax rate | [optional] 
**region** | **str** | Code of the associated region | [optional] 
**tax_on_shipping_price** | **bool** | False if shipping tax is not included on shipping price | [optional] [default to False]

## Example

```python
from openapi_client.models.order_shipping_tax import OrderShippingTax

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippingTax from a JSON string
order_shipping_tax_instance = OrderShippingTax.from_json(json)
# print the JSON string representation of the object
print(OrderShippingTax.to_json())

# convert the object into a dict
order_shipping_tax_dict = order_shipping_tax_instance.to_dict()
# create an instance of OrderShippingTax from a dict
order_shipping_tax_from_dict = OrderShippingTax.from_dict(order_shipping_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


