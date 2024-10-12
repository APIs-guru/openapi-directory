# SellerItemPrices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**ProductPrice**](ProductPrice.md) |  | 
**sku_seller_id** | **str** | Unique product Id from seller that will be updated | 

## Example

```python
from openapi_client.models.seller_item_prices import SellerItemPrices

# TODO update the JSON string below
json = "{}"
# create an instance of SellerItemPrices from a JSON string
seller_item_prices_instance = SellerItemPrices.from_json(json)
# print the JSON string representation of the object
print(SellerItemPrices.to_json())

# convert the object into a dict
seller_item_prices_dict = seller_item_prices_instance.to_dict()
# create an instance of SellerItemPrices from a dict
seller_item_prices_from_dict = SellerItemPrices.from_dict(seller_item_prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


