# Attachment

Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file** | [**DriveFile**](DriveFile.md) |  | [optional] 
**form** | [**Form**](Form.md) |  | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**you_tube_video** | [**YouTubeVideo**](YouTubeVideo.md) |  | [optional] 

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


