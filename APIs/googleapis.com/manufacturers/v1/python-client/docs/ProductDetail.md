# ProductDetail

A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The name of the attribute. | [optional] 
**attribute_value** | **str** | The value of the attribute. | [optional] 
**section_name** | **str** | A short section name that can be reused between multiple product details. | [optional] 

## Example

```python
from openapi_client.models.product_detail import ProductDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDetail from a JSON string
product_detail_instance = ProductDetail.from_json(json)
# print the JSON string representation of the object
print(ProductDetail.to_json())

# convert the object into a dict
product_detail_dict = product_detail_instance.to_dict()
# create an instance of ProductDetail from a dict
product_detail_from_dict = ProductDetail.from_dict(product_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


