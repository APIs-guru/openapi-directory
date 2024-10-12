# ProductPriceAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_prices** | [**List[ProductAddGroupPricesInner]**](ProductAddGroupPricesInner.md) | Defines product&#39;s group prices | [optional] 
**product_id** | **str** | Defines the product to which the price has to be added | [optional] 

## Example

```python
from openapi_client.models.product_price_add import ProductPriceAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPriceAdd from a JSON string
product_price_add_instance = ProductPriceAdd.from_json(json)
# print the JSON string representation of the object
print(ProductPriceAdd.to_json())

# convert the object into a dict
product_price_add_dict = product_price_add_instance.to_dict()
# create an instance of ProductPriceAdd from a dict
product_price_add_from_dict = ProductPriceAdd.from_dict(product_price_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


