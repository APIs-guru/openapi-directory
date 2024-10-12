# PatchAssetCategoriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | PAM asset category code | 
**labels** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | PAM ssset category code of the parent&#39;s asset category | [optional] [default to 'null']

## Example

```python
from openapi_client.models.patch_asset_categories_request import PatchAssetCategoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchAssetCategoriesRequest from a JSON string
patch_asset_categories_request_instance = PatchAssetCategoriesRequest.from_json(json)
# print the JSON string representation of the object
print(PatchAssetCategoriesRequest.to_json())

# convert the object into a dict
patch_asset_categories_request_dict = patch_asset_categories_request_instance.to_dict()
# create an instance of PatchAssetCategoriesRequest from a dict
patch_asset_categories_request_from_dict = PatchAssetCategoriesRequest.from_dict(patch_asset_categories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


