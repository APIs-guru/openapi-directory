# MessagesContentResponseAttachmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_content_response_attachments_inner import MessagesContentResponseAttachmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesContentResponseAttachmentsInner from a JSON string
messages_content_response_attachments_inner_instance = MessagesContentResponseAttachmentsInner.from_json(json)
# print the JSON string representation of the object
print(MessagesContentResponseAttachmentsInner.to_json())

# convert the object into a dict
messages_content_response_attachments_inner_dict = messages_content_response_attachments_inner_instance.to_dict()
# create an instance of MessagesContentResponseAttachmentsInner from a dict
messages_content_response_attachments_inner_from_dict = MessagesContentResponseAttachmentsInner.from_dict(messages_content_response_attachments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


