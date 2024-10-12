# ProductPriceUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_prices** | [**List[ProductPriceUpdateGroupPricesInner]**](ProductPriceUpdateGroupPricesInner.md) | Defines product&#39;s group prices | [optional] 
**product_id** | **str** | Defines the product where the price has to be updated | [optional] 

## Example

```python
from openapi_client.models.product_price_update import ProductPriceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPriceUpdate from a JSON string
product_price_update_instance = ProductPriceUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductPriceUpdate.to_json())

# convert the object into a dict
product_price_update_dict = product_price_update_instance.to_dict()
# create an instance of ProductPriceUpdate from a dict
product_price_update_from_dict = ProductPriceUpdate.from_dict(product_price_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


