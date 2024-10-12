# AttachmentsListResponse

A list of Attachments. This is the response from the server to GET requests on the attachments collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Attachment]**](Attachment.md) | The list of attachments. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#attachmentsList. | [optional] [default to 'mirror#attachmentsList']

## Example

```python
from openapi_client.models.attachments_list_response import AttachmentsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentsListResponse from a JSON string
attachments_list_response_instance = AttachmentsListResponse.from_json(json)
# print the JSON string representation of the object
print(AttachmentsListResponse.to_json())

# convert the object into a dict
attachments_list_response_dict = attachments_list_response_instance.to_dict()
# create an instance of AttachmentsListResponse from a dict
attachments_list_response_from_dict = AttachmentsListResponse.from_dict(attachments_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


