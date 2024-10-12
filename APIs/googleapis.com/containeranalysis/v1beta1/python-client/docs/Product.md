# Product

Product contains information about a product and how to uniquely identify it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_uri** | **str** | Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. | [optional] 
**id** | **str** | Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. | [optional] 
**name** | **str** | Name of the product. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


