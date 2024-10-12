# PAMAssetCategoriesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | PAM asset category code | 
**labels** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | PAM ssset category code of the parent&#39;s asset category | [optional] [default to 'null']

## Example

```python
from openapi_client.models.pam_asset_categories_all_of_embedded_items_inner import PAMAssetCategoriesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PAMAssetCategoriesAllOfEmbeddedItemsInner from a JSON string
pam_asset_categories_all_of_embedded_items_inner_instance = PAMAssetCategoriesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(PAMAssetCategoriesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
pam_asset_categories_all_of_embedded_items_inner_dict = pam_asset_categories_all_of_embedded_items_inner_instance.to_dict()
# create an instance of PAMAssetCategoriesAllOfEmbeddedItemsInner from a dict
pam_asset_categories_all_of_embedded_items_inner_from_dict = PAMAssetCategoriesAllOfEmbeddedItemsInner.from_dict(pam_asset_categories_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


