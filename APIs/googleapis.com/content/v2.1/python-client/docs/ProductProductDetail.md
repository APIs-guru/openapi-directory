# ProductProductDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The name of the product detail. | [optional] 
**attribute_value** | **str** | The value of the product detail. | [optional] 
**section_name** | **str** | The section header used to group a set of product details. | [optional] 

## Example

```python
from openapi_client.models.product_product_detail import ProductProductDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProductProductDetail from a JSON string
product_product_detail_instance = ProductProductDetail.from_json(json)
# print the JSON string representation of the object
print(ProductProductDetail.to_json())

# convert the object into a dict
product_product_detail_dict = product_product_detail_instance.to_dict()
# create an instance of ProductProductDetail from a dict
product_product_detail_from_dict = ProductProductDetail.from_dict(product_product_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


