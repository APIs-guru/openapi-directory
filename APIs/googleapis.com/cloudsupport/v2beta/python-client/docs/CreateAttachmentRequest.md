# CreateAttachmentRequest

The request message for the CreateAttachment endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**Attachment**](Attachment.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_attachment_request import CreateAttachmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAttachmentRequest from a JSON string
create_attachment_request_instance = CreateAttachmentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAttachmentRequest.to_json())

# convert the object into a dict
create_attachment_request_dict = create_attachment_request_instance.to_dict()
# create an instance of CreateAttachmentRequest from a dict
create_attachment_request_from_dict = CreateAttachmentRequest.from_dict(create_attachment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


