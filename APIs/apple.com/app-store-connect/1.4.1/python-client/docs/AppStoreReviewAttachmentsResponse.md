# AppStoreReviewAttachmentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppStoreReviewAttachment]**](AppStoreReviewAttachment.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_attachments_response import AppStoreReviewAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentsResponse from a JSON string
app_store_review_attachments_response_instance = AppStoreReviewAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentsResponse.to_json())

# convert the object into a dict
app_store_review_attachments_response_dict = app_store_review_attachments_response_instance.to_dict()
# create an instance of AppStoreReviewAttachmentsResponse from a dict
app_store_review_attachments_response_from_dict = AppStoreReviewAttachmentsResponse.from_dict(app_store_review_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


