# AppStoreReviewAttachmentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_delivery_state** | [**AppMediaAssetState**](AppMediaAssetState.md) |  | [optional] 
**file_name** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**source_file_checksum** | **str** |  | [optional] 
**upload_operations** | [**List[UploadOperation]**](UploadOperation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_review_attachment_attributes import AppStoreReviewAttachmentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreReviewAttachmentAttributes from a JSON string
app_store_review_attachment_attributes_instance = AppStoreReviewAttachmentAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreReviewAttachmentAttributes.to_json())

# convert the object into a dict
app_store_review_attachment_attributes_dict = app_store_review_attachment_attributes_instance.to_dict()
# create an instance of AppStoreReviewAttachmentAttributes from a dict
app_store_review_attachment_attributes_from_dict = AppStoreReviewAttachmentAttributes.from_dict(app_store_review_attachment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


