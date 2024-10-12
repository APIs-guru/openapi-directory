# ProductPriceUpdateGroupPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_price_update_group_prices_inner import ProductPriceUpdateGroupPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPriceUpdateGroupPricesInner from a JSON string
product_price_update_group_prices_inner_instance = ProductPriceUpdateGroupPricesInner.from_json(json)
# print the JSON string representation of the object
print(ProductPriceUpdateGroupPricesInner.to_json())

# convert the object into a dict
product_price_update_group_prices_inner_dict = product_price_update_group_prices_inner_instance.to_dict()
# create an instance of ProductPriceUpdateGroupPricesInner from a dict
product_price_update_group_prices_inner_from_dict = ProductPriceUpdateGroupPricesInner.from_dict(product_price_update_group_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


