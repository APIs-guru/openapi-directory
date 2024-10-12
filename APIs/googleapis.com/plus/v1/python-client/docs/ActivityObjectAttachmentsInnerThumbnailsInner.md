# ActivityObjectAttachmentsInnerThumbnailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Potential name of the thumbnail. | [optional] 
**image** | [**ActivityObjectAttachmentsInnerThumbnailsInnerImage**](ActivityObjectAttachmentsInnerThumbnailsInnerImage.md) |  | [optional] 
**url** | **str** | URL of the webpage containing the image. | [optional] 

## Example

```python
from openapi_client.models.activity_object_attachments_inner_thumbnails_inner import ActivityObjectAttachmentsInnerThumbnailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectAttachmentsInnerThumbnailsInner from a JSON string
activity_object_attachments_inner_thumbnails_inner_instance = ActivityObjectAttachmentsInnerThumbnailsInner.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectAttachmentsInnerThumbnailsInner.to_json())

# convert the object into a dict
activity_object_attachments_inner_thumbnails_inner_dict = activity_object_attachments_inner_thumbnails_inner_instance.to_dict()
# create an instance of ActivityObjectAttachmentsInnerThumbnailsInner from a dict
activity_object_attachments_inner_thumbnails_inner_from_dict = ActivityObjectAttachmentsInnerThumbnailsInner.from_dict(activity_object_attachments_inner_thumbnails_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


