# ClassAttachmentCreation

Attachment creation for an assignment or stream post. This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_drive_file_id** | **str** | The ID of the Google Drive File | [optional] 
**lock_score_template** | **bool** | To be used with a score attached in &#x60;sharingMode&#x60; &#x60;copy&#x60; (score used as template). If true, students won&#39;t be able to change the original notes of the template. | [optional] 
**score** | **str** | A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the teachers and students of the class.  | [optional] 
**sharing_mode** | [**MediaScoreSharingMode**](MediaScoreSharingMode.md) |  | [optional] [default to MediaScoreSharingMode.READ]
**type** | **str** | The type of the attachment posted | [optional] 
**url** | **str** | The URL of the attachment. | [optional] 
**worksheet** | **str** | An unique worksheet identifier | [optional] 

## Example

```python
from openapi_client.models.class_attachment_creation import ClassAttachmentCreation

# TODO update the JSON string below
json = "{}"
# create an instance of ClassAttachmentCreation from a JSON string
class_attachment_creation_instance = ClassAttachmentCreation.from_json(json)
# print the JSON string representation of the object
print(ClassAttachmentCreation.to_json())

# convert the object into a dict
class_attachment_creation_dict = class_attachment_creation_instance.to_dict()
# create an instance of ClassAttachmentCreation from a dict
class_attachment_creation_from_dict = ClassAttachmentCreation.from_dict(class_attachment_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


