# LocalesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Locale code | 
**enabled** | **bool** | Whether the locale is enabled | [optional] [default to False]

## Example

```python
from openapi_client.models.locales_all_of_embedded_items_inner import LocalesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of LocalesAllOfEmbeddedItemsInner from a JSON string
locales_all_of_embedded_items_inner_instance = LocalesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(LocalesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
locales_all_of_embedded_items_inner_dict = locales_all_of_embedded_items_inner_instance.to_dict()
# create an instance of LocalesAllOfEmbeddedItemsInner from a dict
locales_all_of_embedded_items_inner_from_dict = LocalesAllOfEmbeddedItemsInner.from_dict(locales_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


