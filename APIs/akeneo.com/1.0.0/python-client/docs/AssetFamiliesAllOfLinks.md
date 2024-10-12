# AssetFamiliesAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**PAMAssetCategoriesAllOfLinksFirst**](PAMAssetCategoriesAllOfLinksFirst.md) |  | [optional] 
**next** | [**PAMAssetCategoriesAllOfLinksNext**](PAMAssetCategoriesAllOfLinksNext.md) |  | [optional] 
**var_self** | [**PAMAssetCategoriesAllOfLinksSelf**](PAMAssetCategoriesAllOfLinksSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.asset_families_all_of_links import AssetFamiliesAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFamiliesAllOfLinks from a JSON string
asset_families_all_of_links_instance = AssetFamiliesAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(AssetFamiliesAllOfLinks.to_json())

# convert the object into a dict
asset_families_all_of_links_dict = asset_families_all_of_links_instance.to_dict()
# create an instance of AssetFamiliesAllOfLinks from a dict
asset_families_all_of_links_from_dict = AssetFamiliesAllOfLinks.from_dict(asset_families_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


