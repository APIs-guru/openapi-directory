# AppStoreReviewAttachmentCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotCreateRequestDataAttributes**](AppScreenshotCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppStoreReviewAttachmentCreateRequestDataRelationships**](AppStoreReviewAttachmentCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_review_attachment_create_request_data import AppStoreReviewAttachmentCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentCreateRequestData from a JSON string
app_store_review_attachment_create_request_data_instance = AppStoreReviewAttachmentCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentCreateRequestData.to_json())

# convert the object into a dict
app_store_review_attachment_create_request_data_dict = app_store_review_attachment_create_request_data_instance.to_dict()
# create an instance of AppStoreReviewAttachmentCreateRequestData from a dict
app_store_review_attachment_create_request_data_from_dict = AppStoreReviewAttachmentCreateRequestData.from_dict(app_store_review_attachment_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


