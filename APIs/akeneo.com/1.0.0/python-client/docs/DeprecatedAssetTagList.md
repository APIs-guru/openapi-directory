# DeprecatedAssetTagList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | PAM asset tag code | 

## Example

```python
from openapi_client.models.deprecated_asset_tag_list import DeprecatedAssetTagList

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedAssetTagList from a JSON string
deprecated_asset_tag_list_instance = DeprecatedAssetTagList.from_json(json)
# print the JSON string representation of the object
print(DeprecatedAssetTagList.to_json())

# convert the object into a dict
deprecated_asset_tag_list_dict = deprecated_asset_tag_list_instance.to_dict()
# create an instance of DeprecatedAssetTagList from a dict
deprecated_asset_tag_list_from_dict = DeprecatedAssetTagList.from_dict(deprecated_asset_tag_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


