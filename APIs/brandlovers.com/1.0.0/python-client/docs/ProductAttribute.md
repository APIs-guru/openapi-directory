# ProductAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Attribute name | 
**value** | **str** | Attribute value | 

## Example

```python
from openapi_client.models.product_attribute import ProductAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAttribute from a JSON string
product_attribute_instance = ProductAttribute.from_json(json)
# print the JSON string representation of the object
print(ProductAttribute.to_json())

# convert the object into a dict
product_attribute_dict = product_attribute_instance.to_dict()
# create an instance of ProductAttribute from a dict
product_attribute_from_dict = ProductAttribute.from_dict(product_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


