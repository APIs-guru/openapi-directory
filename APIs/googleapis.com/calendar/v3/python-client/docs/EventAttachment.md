# EventAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | ID of the attached file. Read-only. For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API. | [optional] 
**file_url** | **str** | URL link to the attachment. For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API. Required when adding an attachment. | [optional] 
**icon_link** | **str** | URL link to the attachment&#39;s icon. This field can only be modified for custom third-party attachments. | [optional] 
**mime_type** | **str** | Internet media type (MIME type) of the attachment. | [optional] 
**title** | **str** | Attachment title. | [optional] 

## Example

```python
from openapi_client.models.event_attachment import EventAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of EventAttachment from a JSON string
event_attachment_instance = EventAttachment.from_json(json)
# print the JSON string representation of the object
print(EventAttachment.to_json())

# convert the object into a dict
event_attachment_dict = event_attachment_instance.to_dict()
# create an instance of EventAttachment from a dict
event_attachment_from_dict = EventAttachment.from_dict(event_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


