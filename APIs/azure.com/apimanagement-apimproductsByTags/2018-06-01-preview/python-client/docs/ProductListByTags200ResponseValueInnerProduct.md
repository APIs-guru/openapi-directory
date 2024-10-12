# ProductListByTags200ResponseValueInnerProduct

Product profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the product in the form of /products/{productId} | [optional] 
**name** | **str** | Product name. | 

## Example

```python
from openapi_client.models.product_list_by_tags200_response_value_inner_product import ProductListByTags200ResponseValueInnerProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTags200ResponseValueInnerProduct from a JSON string
product_list_by_tags200_response_value_inner_product_instance = ProductListByTags200ResponseValueInnerProduct.from_json(json)
# print the JSON string representation of the object
print(ProductListByTags200ResponseValueInnerProduct.to_json())

# convert the object into a dict
product_list_by_tags200_response_value_inner_product_dict = product_list_by_tags200_response_value_inner_product_instance.to_dict()
# create an instance of ProductListByTags200ResponseValueInnerProduct from a dict
product_list_by_tags200_response_value_inner_product_from_dict = ProductListByTags200ResponseValueInnerProduct.from_dict(product_list_by_tags200_response_value_inner_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


