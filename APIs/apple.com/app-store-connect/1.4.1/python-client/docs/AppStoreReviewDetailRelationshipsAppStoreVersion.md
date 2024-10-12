# AppStoreReviewDetailRelationshipsAppStoreVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsAppStoreVersionsDataInner**](AppRelationshipsAppStoreVersionsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_detail_relationships_app_store_version import AppStoreReviewDetailRelationshipsAppStoreVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailRelationshipsAppStoreVersion from a JSON string
app_store_review_detail_relationships_app_store_version_instance = AppStoreReviewDetailRelationshipsAppStoreVersion.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailRelationshipsAppStoreVersion.to_json())

# convert the object into a dict
app_store_review_detail_relationships_app_store_version_dict = app_store_review_detail_relationships_app_store_version_instance.to_dict()
# create an instance of AppStoreReviewDetailRelationshipsAppStoreVersion from a dict
app_store_review_detail_relationships_app_store_version_from_dict = AppStoreReviewDetailRelationshipsAppStoreVersion.from_dict(app_store_review_detail_relationships_app_store_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


