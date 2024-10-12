# PAMAssetCategoriesAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**PAMAssetCategoriesAllOfLinksFirst**](PAMAssetCategoriesAllOfLinksFirst.md) |  | [optional] 
**next** | [**PAMAssetCategoriesAllOfLinksNext**](PAMAssetCategoriesAllOfLinksNext.md) |  | [optional] 
**previous** | [**PAMAssetCategoriesAllOfLinksPrevious**](PAMAssetCategoriesAllOfLinksPrevious.md) |  | [optional] 
**var_self** | [**PAMAssetCategoriesAllOfLinksSelf**](PAMAssetCategoriesAllOfLinksSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.pam_asset_categories_all_of_links import PAMAssetCategoriesAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PAMAssetCategoriesAllOfLinks from a JSON string
pam_asset_categories_all_of_links_instance = PAMAssetCategoriesAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(PAMAssetCategoriesAllOfLinks.to_json())

# convert the object into a dict
pam_asset_categories_all_of_links_dict = pam_asset_categories_all_of_links_instance.to_dict()
# create an instance of PAMAssetCategoriesAllOfLinks from a dict
pam_asset_categories_all_of_links_from_dict = PAMAssetCategoriesAllOfLinks.from_dict(pam_asset_categories_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


