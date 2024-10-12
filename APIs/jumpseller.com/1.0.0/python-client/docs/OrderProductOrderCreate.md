# OrderProductOrderCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount** | **float** | Discount of the Order Product | [optional] 
**id** | **int** | Unique identifier of the original Product | [optional] 
**price** | **float** | Price of the Order Product | [optional] 
**qty** | **int** | Price of the Order Product | [optional] 
**variant_id** | **int** | Unique identifier of the original Product Variant | [optional] 

## Example

```python
from openapi_client.models.order_product_order_create import OrderProductOrderCreate

# TODO update the JSON string below
json = "{}"
# create an instance of OrderProductOrderCreate from a JSON string
order_product_order_create_instance = OrderProductOrderCreate.from_json(json)
# print the JSON string representation of the object
print(OrderProductOrderCreate.to_json())

# convert the object into a dict
order_product_order_create_dict = order_product_order_create_instance.to_dict()
# create an instance of OrderProductOrderCreate from a dict
order_product_order_create_from_dict = OrderProductOrderCreate.from_dict(order_product_order_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


