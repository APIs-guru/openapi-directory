# PAMAssetTagsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | PAM asset tag code | 

## Example

```python
from openapi_client.models.pam_asset_tags_all_of_embedded_items_inner import PAMAssetTagsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PAMAssetTagsAllOfEmbeddedItemsInner from a JSON string
pam_asset_tags_all_of_embedded_items_inner_instance = PAMAssetTagsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(PAMAssetTagsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
pam_asset_tags_all_of_embedded_items_inner_dict = pam_asset_tags_all_of_embedded_items_inner_instance.to_dict()
# create an instance of PAMAssetTagsAllOfEmbeddedItemsInner from a dict
pam_asset_tags_all_of_embedded_items_inner_from_dict = PAMAssetTagsAllOfEmbeddedItemsInner.from_dict(pam_asset_tags_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


