# ProductVariantUpdateOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option_name** | **str** |  | [optional] 
**option_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_variant_update_options_inner import ProductVariantUpdateOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantUpdateOptionsInner from a JSON string
product_variant_update_options_inner_instance = ProductVariantUpdateOptionsInner.from_json(json)
# print the JSON string representation of the object
print(ProductVariantUpdateOptionsInner.to_json())

# convert the object into a dict
product_variant_update_options_inner_dict = product_variant_update_options_inner_instance.to_dict()
# create an instance of ProductVariantUpdateOptionsInner from a dict
product_variant_update_options_inner_from_dict = ProductVariantUpdateOptionsInner.from_dict(product_variant_update_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


