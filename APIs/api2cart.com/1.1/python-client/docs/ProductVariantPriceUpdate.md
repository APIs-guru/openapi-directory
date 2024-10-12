# ProductVariantPriceUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_prices** | [**List[ProductPriceUpdateGroupPricesInner]**](ProductPriceUpdateGroupPricesInner.md) | Defines variants&#39;s group prices | 
**id** | **str** | Defines the variant where the price has to be updated | [optional] 
**product_id** | **str** | Product id | [optional] 

## Example

```python
from openapi_client.models.product_variant_price_update import ProductVariantPriceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantPriceUpdate from a JSON string
product_variant_price_update_instance = ProductVariantPriceUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductVariantPriceUpdate.to_json())

# convert the object into a dict
product_variant_price_update_dict = product_variant_price_update_instance.to_dict()
# create an instance of ProductVariantPriceUpdate from a dict
product_variant_price_update_from_dict = ProductVariantPriceUpdate.from_dict(product_variant_price_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


