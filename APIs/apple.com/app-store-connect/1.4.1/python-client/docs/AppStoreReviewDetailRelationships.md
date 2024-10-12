# AppStoreReviewDetailRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store_review_attachments** | [**AppStoreReviewDetailRelationshipsAppStoreReviewAttachments**](AppStoreReviewDetailRelationshipsAppStoreReviewAttachments.md) |  | [optional] 
**app_store_version** | [**AppStoreReviewDetailRelationshipsAppStoreVersion**](AppStoreReviewDetailRelationshipsAppStoreVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_detail_relationships import AppStoreReviewDetailRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewDetailRelationships from a JSON string
app_store_review_detail_relationships_instance = AppStoreReviewDetailRelationships.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewDetailRelationships.to_json())

# convert the object into a dict
app_store_review_detail_relationships_dict = app_store_review_detail_relationships_instance.to_dict()
# create an instance of AppStoreReviewDetailRelationships from a dict
app_store_review_detail_relationships_from_dict = AppStoreReviewDetailRelationships.from_dict(app_store_review_detail_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


