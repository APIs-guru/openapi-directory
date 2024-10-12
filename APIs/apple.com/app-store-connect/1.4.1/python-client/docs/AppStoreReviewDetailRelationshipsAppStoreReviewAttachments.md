# AppStoreReviewDetailRelationshipsAppStoreReviewAttachments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner]**](AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_detail_relationships_app_store_review_attachments import AppStoreReviewDetailRelationshipsAppStoreReviewAttachments

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailRelationshipsAppStoreReviewAttachments from a JSON string
app_store_review_detail_relationships_app_store_review_attachments_instance = AppStoreReviewDetailRelationshipsAppStoreReviewAttachments.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailRelationshipsAppStoreReviewAttachments.to_json())

# convert the object into a dict
app_store_review_detail_relationships_app_store_review_attachments_dict = app_store_review_detail_relationships_app_store_review_attachments_instance.to_dict()
# create an instance of AppStoreReviewDetailRelationshipsAppStoreReviewAttachments from a dict
app_store_review_detail_relationships_app_store_review_attachments_from_dict = AppStoreReviewDetailRelationshipsAppStoreReviewAttachments.from_dict(app_store_review_detail_relationships_app_store_review_attachments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


