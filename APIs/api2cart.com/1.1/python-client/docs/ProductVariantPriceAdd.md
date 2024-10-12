# ProductVariantPriceAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_prices** | [**List[ProductAddGroupPricesInner]**](ProductAddGroupPricesInner.md) | Defines variants&#39;s group prices | 
**id** | **str** | Defines the variant to which the price has to be added | [optional] 
**product_id** | **str** | Product id | [optional] 

## Example

```python
from openapi_client.models.product_variant_price_add import ProductVariantPriceAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantPriceAdd from a JSON string
product_variant_price_add_instance = ProductVariantPriceAdd.from_json(json)
# print the JSON string representation of the object
print(ProductVariantPriceAdd.to_json())

# convert the object into a dict
product_variant_price_add_dict = product_variant_price_add_instance.to_dict()
# create an instance of ProductVariantPriceAdd from a dict
product_variant_price_add_from_dict = ProductVariantPriceAdd.from_dict(product_variant_price_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


