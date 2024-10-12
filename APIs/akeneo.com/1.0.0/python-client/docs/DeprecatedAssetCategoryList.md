# DeprecatedAssetCategoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | PAM asset category code | 
**labels** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | PAM ssset category code of the parent&#39;s asset category | [optional] [default to 'null']

## Example

```python
from openapi_client.models.deprecated_asset_category_list import DeprecatedAssetCategoryList

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedAssetCategoryList from a JSON string
deprecated_asset_category_list_instance = DeprecatedAssetCategoryList.from_json(json)
# print the JSON string representation of the object
print(DeprecatedAssetCategoryList.to_json())

# convert the object into a dict
deprecated_asset_category_list_dict = deprecated_asset_category_list_instance.to_dict()
# create an instance of DeprecatedAssetCategoryList from a dict
deprecated_asset_category_list_from_dict = DeprecatedAssetCategoryList.from_dict(deprecated_asset_category_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


