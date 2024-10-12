# CreateAttachmentsMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[DmMediaAttachment]**](DmMediaAttachment.md) | Attachments to a DM Event. | 
**text** | **str** | Text of the message. | [optional] 

## Example

```python
from openapi_client.models.create_attachments_message_request import CreateAttachmentsMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAttachmentsMessageRequest from a JSON string
create_attachments_message_request_instance = CreateAttachmentsMessageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAttachmentsMessageRequest.to_json())

# convert the object into a dict
create_attachments_message_request_dict = create_attachments_message_request_instance.to_dict()
# create an instance of CreateAttachmentsMessageRequest from a dict
create_attachments_message_request_from_dict = CreateAttachmentsMessageRequest.from_dict(create_attachments_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


