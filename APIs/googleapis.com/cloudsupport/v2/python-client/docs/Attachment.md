# Attachment

An Attachment contains metadata about a file that was uploaded to a case - it is NOT a file itself. That being said, the name of an Attachment object can be used to download its accompanying file through the `media.download` endpoint. While attachments can be uploaded in the console at the same time as a comment, they're associated on a \"case\" level, not a \"comment\" level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the attachment was created. | [optional] [readonly] 
**creator** | [**Actor**](Actor.md) |  | [optional] 
**filename** | **str** | The filename of the attachment (e.g. &#x60;\&quot;graph.jpg\&quot;&#x60;). | [optional] 
**mime_type** | **str** | Output only. The MIME type of the attachment (e.g. text/plain). | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the attachment. | [optional] [readonly] 
**size_bytes** | **str** | Output only. The size of the attachment in bytes. | [optional] [readonly] 

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


