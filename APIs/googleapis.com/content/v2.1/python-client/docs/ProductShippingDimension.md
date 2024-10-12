# ProductShippingDimension


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of value. | [optional] 
**value** | **float** | The dimension of the product used to calculate the shipping cost of the item. | [optional] 

## Example

```python
from openapi_client.models.product_shipping_dimension import ProductShippingDimension

# TODO update the JSON string below
json = "{}"
# create an instance of ProductShippingDimension from a JSON string
product_shipping_dimension_instance = ProductShippingDimension.from_json(json)
# print the JSON string representation of the object
print(ProductShippingDimension.to_json())

# convert the object into a dict
product_shipping_dimension_dict = product_shipping_dimension_instance.to_dict()
# create an instance of ProductShippingDimension from a dict
product_shipping_dimension_from_dict = ProductShippingDimension.from_dict(product_shipping_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


