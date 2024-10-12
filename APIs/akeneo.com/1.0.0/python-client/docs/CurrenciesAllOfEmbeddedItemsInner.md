# CurrenciesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Currency code | 
**enabled** | **bool** | Whether the currency is enabled | [optional] 

## Example

```python
from openapi_client.models.currencies_all_of_embedded_items_inner import CurrenciesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CurrenciesAllOfEmbeddedItemsInner from a JSON string
currencies_all_of_embedded_items_inner_instance = CurrenciesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(CurrenciesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
currencies_all_of_embedded_items_inner_dict = currencies_all_of_embedded_items_inner_instance.to_dict()
# create an instance of CurrenciesAllOfEmbeddedItemsInner from a dict
currencies_all_of_embedded_items_inner_from_dict = CurrenciesAllOfEmbeddedItemsInner.from_dict(currencies_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


