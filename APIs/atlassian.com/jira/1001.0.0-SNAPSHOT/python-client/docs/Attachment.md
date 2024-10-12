# Attachment

Details about an attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**UserDetails**](UserDetails.md) | Details of the user who added the attachment. | [optional] [readonly] 
**content** | **str** | The content of the attachment. | [optional] [readonly] 
**created** | **datetime** | The datetime the attachment was created. | [optional] [readonly] 
**filename** | **str** | The file name of the attachment. | [optional] [readonly] 
**id** | **str** | The ID of the attachment. | [optional] [readonly] 
**mime_type** | **str** | The MIME type of the attachment. | [optional] [readonly] 
**var_self** | **str** | The URL of the attachment details response. | [optional] [readonly] 
**size** | **int** | The size of the attachment. | [optional] [readonly] 
**thumbnail** | **str** | The URL of a thumbnail representing the attachment. | [optional] [readonly] 

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


