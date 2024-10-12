# AppStoreReviewAttachmentUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewAttachmentUpdateRequestData**](AppStoreReviewAttachmentUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_attachment_update_request import AppStoreReviewAttachmentUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentUpdateRequest from a JSON string
app_store_review_attachment_update_request_instance = AppStoreReviewAttachmentUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentUpdateRequest.to_json())

# convert the object into a dict
app_store_review_attachment_update_request_dict = app_store_review_attachment_update_request_instance.to_dict()
# create an instance of AppStoreReviewAttachmentUpdateRequest from a dict
app_store_review_attachment_update_request_from_dict = AppStoreReviewAttachmentUpdateRequest.from_dict(app_store_review_attachment_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


