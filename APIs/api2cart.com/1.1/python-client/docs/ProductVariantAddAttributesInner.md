# ProductVariantAddAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** |  | [optional] 
**attribute_price** | **float** |  | [optional] 
**attribute_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_variant_add_attributes_inner import ProductVariantAddAttributesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantAddAttributesInner from a JSON string
product_variant_add_attributes_inner_instance = ProductVariantAddAttributesInner.from_json(json)
# print the JSON string representation of the object
print(ProductVariantAddAttributesInner.to_json())

# convert the object into a dict
product_variant_add_attributes_inner_dict = product_variant_add_attributes_inner_instance.to_dict()
# create an instance of ProductVariantAddAttributesInner from a dict
product_variant_add_attributes_inner_from_dict = ProductVariantAddAttributesInner.from_dict(product_variant_add_attributes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


