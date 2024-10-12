# ProductShippingWeight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of value. | [optional] 
**value** | **float** | The weight of the product used to calculate the shipping cost of the item. | [optional] 

## Example

```python
from openapi_client.models.product_shipping_weight import ProductShippingWeight

# TODO update the JSON string below
json = "{}"
# create an instance of ProductShippingWeight from a JSON string
product_shipping_weight_instance = ProductShippingWeight.from_json(json)
# print the JSON string representation of the object
print(ProductShippingWeight.to_json())

# convert the object into a dict
product_shipping_weight_dict = product_shipping_weight_instance.to_dict()
# create an instance of ProductShippingWeight from a dict
product_shipping_weight_from_dict = ProductShippingWeight.from_dict(product_shipping_weight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


