# AppStoreReviewAttachmentCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewAttachmentCreateRequestData**](AppStoreReviewAttachmentCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_attachment_create_request import AppStoreReviewAttachmentCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentCreateRequest from a JSON string
app_store_review_attachment_create_request_instance = AppStoreReviewAttachmentCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentCreateRequest.to_json())

# convert the object into a dict
app_store_review_attachment_create_request_dict = app_store_review_attachment_create_request_instance.to_dict()
# create an instance of AppStoreReviewAttachmentCreateRequest from a dict
app_store_review_attachment_create_request_from_dict = AppStoreReviewAttachmentCreateRequest.from_dict(app_store_review_attachment_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


