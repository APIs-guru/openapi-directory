# OrderProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount** | **float** | Discount of the Order Product | [optional] 
**id** | **int** | Unique identifier of the original Product | [optional] 
**image** | **str** | Image URL of the Order Product | [optional] 
**name** | **str** | Name of the Order Product | [optional] 
**price** | **float** | Price of the Order Product | [optional] 
**qty** | **int** | Price of the Order Product | [optional] 
**sku** | **str** | Stock Keeping Unit of the Order Product | [optional] 
**taxes** | [**List[OrderProductTax]**](OrderProductTax.md) |  | [optional] 
**variant_id** | **int** | Unique identifier of the original Product Variant | [optional] 
**weight** | **float** | Weight of the Order Product | [optional] [default to 1]

## Example

```python
from openapi_client.models.order_product import OrderProduct

# TODO update the JSON string below
json = "{}"
# create an instance of OrderProduct from a JSON string
order_product_instance = OrderProduct.from_json(json)
# print the JSON string representation of the object
print(OrderProduct.to_json())

# convert the object into a dict
order_product_dict = order_product_instance.to_dict()
# create an instance of OrderProduct from a dict
order_product_from_dict = OrderProduct.from_dict(order_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


