# AttachmentMetadata

Metadata for an issue attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**User**](User.md) | Details of the user who attached the file. | [optional] [readonly] 
**content** | **str** | The URL of the attachment. | [optional] [readonly] 
**created** | **datetime** | The datetime the attachment was created. | [optional] [readonly] 
**filename** | **str** | The name of the attachment file. | [optional] [readonly] 
**id** | **int** | The ID of the attachment. | [optional] [readonly] 
**mime_type** | **str** | The MIME type of the attachment. | [optional] [readonly] 
**properties** | **Dict[str, object]** | Additional properties of the attachment. | [optional] [readonly] 
**var_self** | **str** | The URL of the attachment metadata details. | [optional] [readonly] 
**size** | **int** | The size of the attachment. | [optional] [readonly] 
**thumbnail** | **str** | The URL of a thumbnail representing the attachment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attachment_metadata import AttachmentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentMetadata from a JSON string
attachment_metadata_instance = AttachmentMetadata.from_json(json)
# print the JSON string representation of the object
print(AttachmentMetadata.to_json())

# convert the object into a dict
attachment_metadata_dict = attachment_metadata_instance.to_dict()
# create an instance of AttachmentMetadata from a dict
attachment_metadata_from_dict = AttachmentMetadata.from_dict(attachment_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


