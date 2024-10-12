# ProductAddTierPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **float** |  | [optional] 
**quantity** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_add_tier_prices_inner import ProductAddTierPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAddTierPricesInner from a JSON string
product_add_tier_prices_inner_instance = ProductAddTierPricesInner.from_json(json)
# print the JSON string representation of the object
print(ProductAddTierPricesInner.to_json())

# convert the object into a dict
product_add_tier_prices_inner_dict = product_add_tier_prices_inner_instance.to_dict()
# create an instance of ProductAddTierPricesInner from a dict
product_add_tier_prices_inner_from_dict = ProductAddTierPricesInner.from_dict(product_add_tier_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


