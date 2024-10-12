# Attachment

Represents a file or media attachment that can be added to a status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blurhash** | **str** | A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. | [optional] 
**description** | **str** | Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load. | [optional] 
**id** | **str** | The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number | 
**meta** | **object** | Metadata returned by Paperclip. | [optional] 
**preview_url** | **str** | The location of a scaled-down preview of the attachment. | 
**remote_url** | **str** | The location of the full-size original attachment on the remote website. String or null if the attachment is local. | [optional] 
**text_url** | **str** | A shorter URL for the attachment. | [optional] 
**type** | **str** | The type of the attachment. | 
**url** | **str** | The location of the original full-size attachment. | 

## Example

```python
from openapi_client.models.attachment import Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment from a JSON string
attachment_instance = Attachment.from_json(json)
# print the JSON string representation of the object
print(Attachment.to_json())

# convert the object into a dict
attachment_dict = attachment_instance.to_dict()
# create an instance of Attachment from a dict
attachment_from_dict = Attachment.from_dict(attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


