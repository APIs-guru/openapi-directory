# Attachment

An attachment to a note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **List[str]** | The MIME types (IANA media types) in which the attachment is available. | [optional] 
**name** | **str** | The resource name; | [optional] 

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


