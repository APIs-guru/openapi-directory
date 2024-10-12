# ActivityObjectAttachmentsInnerThumbnailsInnerImage

Image resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height, in pixels, of the linked resource. | [optional] 
**type** | **str** | Media type of the link. | [optional] 
**url** | **str** | Image url. | [optional] 
**width** | **int** | The width, in pixels, of the linked resource. | [optional] 

## Example

```python
from openapi_client.models.activity_object_attachments_inner_thumbnails_inner_image import ActivityObjectAttachmentsInnerThumbnailsInnerImage

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectAttachmentsInnerThumbnailsInnerImage from a JSON string
activity_object_attachments_inner_thumbnails_inner_image_instance = ActivityObjectAttachmentsInnerThumbnailsInnerImage.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectAttachmentsInnerThumbnailsInnerImage.to_json())

# convert the object into a dict
activity_object_attachments_inner_thumbnails_inner_image_dict = activity_object_attachments_inner_thumbnails_inner_image_instance.to_dict()
# create an instance of ActivityObjectAttachmentsInnerThumbnailsInnerImage from a dict
activity_object_attachments_inner_thumbnails_inner_image_from_dict = ActivityObjectAttachmentsInnerThumbnailsInnerImage.from_dict(activity_object_attachments_inner_thumbnails_inner_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


