# PostAssetCategoriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | PAM asset category code | 
**labels** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**parent** | **str** | PAM ssset category code of the parent&#39;s asset category | [optional] [default to 'null']

## Example

```python
from openapi_client.models.post_asset_categories_request import PostAssetCategoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostAssetCategoriesRequest from a JSON string
post_asset_categories_request_instance = PostAssetCategoriesRequest.from_json(json)
# print the JSON string representation of the object
print(PostAssetCategoriesRequest.to_json())

# convert the object into a dict
post_asset_categories_request_dict = post_asset_categories_request_instance.to_dict()
# create an instance of PostAssetCategoriesRequest from a dict
post_asset_categories_request_from_dict = PostAssetCategoriesRequest.from_dict(post_asset_categories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


