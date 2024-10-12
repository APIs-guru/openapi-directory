# ProductOptionVariantEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the product option | [optional] 
**product_option_id** | **int** | Id of the product option | [optional] 
**product_option_position** | **int** | position of product option | [optional] 
**product_option_value_id** | **int** | Id of product option value | [optional] 
**product_value_position** | **int** | position of product option value | [optional] 
**value** | **str** | Value of the product option | [optional] 

## Example

```python
from openapi_client.models.product_option_variant_edit import ProductOptionVariantEdit

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionVariantEdit from a JSON string
product_option_variant_edit_instance = ProductOptionVariantEdit.from_json(json)
# print the JSON string representation of the object
print(ProductOptionVariantEdit.to_json())

# convert the object into a dict
product_option_variant_edit_dict = product_option_variant_edit_instance.to_dict()
# create an instance of ProductOptionVariantEdit from a dict
product_option_variant_edit_from_dict = ProductOptionVariantEdit.from_dict(product_option_variant_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


