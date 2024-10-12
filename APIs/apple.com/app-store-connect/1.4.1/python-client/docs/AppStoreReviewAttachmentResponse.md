# AppStoreReviewAttachmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreReviewAttachment**](AppStoreReviewAttachment.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_review_attachment_response import AppStoreReviewAttachmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentResponse from a JSON string
app_store_review_attachment_response_instance = AppStoreReviewAttachmentResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentResponse.to_json())

# convert the object into a dict
app_store_review_attachment_response_dict = app_store_review_attachment_response_instance.to_dict()
# create an instance of AppStoreReviewAttachmentResponse from a dict
app_store_review_attachment_response_from_dict = AppStoreReviewAttachmentResponse.from_dict(app_store_review_attachment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


