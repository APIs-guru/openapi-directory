# AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData**](AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_attachment_relationships_app_store_review_detail import AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail from a JSON string
app_store_review_attachment_relationships_app_store_review_detail_instance = AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail.to_json())

# convert the object into a dict
app_store_review_attachment_relationships_app_store_review_detail_dict = app_store_review_attachment_relationships_app_store_review_detail_instance.to_dict()
# create an instance of AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail from a dict
app_store_review_attachment_relationships_app_store_review_detail_from_dict = AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail.from_dict(app_store_review_attachment_relationships_app_store_review_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


