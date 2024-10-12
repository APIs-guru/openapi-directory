# AssetAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Code of the asset | 
**created** | **str** | Date of creation | [optional] 
**updated** | **str** | Date of the last update | [optional] 
**values** | [**AssetAllOfEmbeddedItemsInnerAllOfValues**](AssetAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.asset_all_of_embedded_items_inner import AssetAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetAllOfEmbeddedItemsInner from a JSON string
asset_all_of_embedded_items_inner_instance = AssetAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(AssetAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
asset_all_of_embedded_items_inner_dict = asset_all_of_embedded_items_inner_instance.to_dict()
# create an instance of AssetAllOfEmbeddedItemsInner from a dict
asset_all_of_embedded_items_inner_from_dict = AssetAllOfEmbeddedItemsInner.from_dict(asset_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


