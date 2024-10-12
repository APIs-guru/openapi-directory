# AppStoreReviewAttachmentUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotUpdateRequestDataAttributes**](AppScreenshotUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_review_attachment_update_request_data import AppStoreReviewAttachmentUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentUpdateRequestData from a JSON string
app_store_review_attachment_update_request_data_instance = AppStoreReviewAttachmentUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentUpdateRequestData.to_json())

# convert the object into a dict
app_store_review_attachment_update_request_data_dict = app_store_review_attachment_update_request_data_instance.to_dict()
# create an instance of AppStoreReviewAttachmentUpdateRequestData from a dict
app_store_review_attachment_update_request_data_from_dict = AppStoreReviewAttachmentUpdateRequestData.from_dict(app_store_review_attachment_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


