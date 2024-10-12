# Attachment

An attachment in Google Chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_data_ref** | [**AttachmentDataRef**](AttachmentDataRef.md) |  | [optional] 
**content_name** | **str** | Output only. The original file name for the content, not the full path. | [optional] [readonly] 
**content_type** | **str** | Output only. The content type (MIME type) of the file. | [optional] [readonly] 
**download_uri** | **str** | Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn&#39;t use this URL to download attachment content. | [optional] [readonly] 
**drive_data_ref** | [**DriveDataRef**](DriveDataRef.md) |  | [optional] 
**name** | **str** | Resource name of the attachment, in the form &#x60;spaces/*/messages/*/attachments/*&#x60;. | [optional] 
**source** | **str** | Output only. The source of the attachment. | [optional] [readonly] 
**thumbnail_uri** | **str** | Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn&#39;t use this URL to download attachment content. | [optional] [readonly] 

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


