# ActivityObjectAttachmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types. | [optional] 
**display_name** | **str** | The title of the attachment, such as a photo caption or an article title. | [optional] 
**embed** | [**ActivityObjectAttachmentsInnerEmbed**](ActivityObjectAttachmentsInnerEmbed.md) |  | [optional] 
**full_image** | [**ActivityObjectAttachmentsInnerFullImage**](ActivityObjectAttachmentsInnerFullImage.md) |  | [optional] 
**id** | **str** | The ID of the attachment. | [optional] 
**image** | [**ActivityObjectAttachmentsInnerImage**](ActivityObjectAttachmentsInnerImage.md) |  | [optional] 
**object_type** | **str** | The type of media object. Possible values include, but are not limited to, the following values:   - \&quot;photo\&quot; - A photo.  - \&quot;album\&quot; - A photo album.  - \&quot;video\&quot; - A video.  - \&quot;article\&quot; - An article, specified by a link. | [optional] 
**thumbnails** | [**List[ActivityObjectAttachmentsInnerThumbnailsInner]**](ActivityObjectAttachmentsInnerThumbnailsInner.md) | If the attachment is an album, this property is a list of potential additional thumbnails from the album. | [optional] 
**url** | **str** | The link to the attachment, which should be of type text/html. | [optional] 

## Example

```python
from openapi_client.models.activity_object_attachments_inner import ActivityObjectAttachmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectAttachmentsInner from a JSON string
activity_object_attachments_inner_instance = ActivityObjectAttachmentsInner.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectAttachmentsInner.to_json())

# convert the object into a dict
activity_object_attachments_inner_dict = activity_object_attachments_inner_instance.to_dict()
# create an instance of ActivityObjectAttachmentsInner from a dict
activity_object_attachments_inner_from_dict = ActivityObjectAttachmentsInner.from_dict(activity_object_attachments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


