# ProductTierPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**price** | **float** |  | [optional] 
**qty** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_tier_price import ProductTierPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ProductTierPrice from a JSON string
product_tier_price_instance = ProductTierPrice.from_json(json)
# print the JSON string representation of the object
print(ProductTierPrice.to_json())

# convert the object into a dict
product_tier_price_dict = product_tier_price_instance.to_dict()
# create an instance of ProductTierPrice from a dict
product_tier_price_from_dict = ProductTierPrice.from_dict(product_tier_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


