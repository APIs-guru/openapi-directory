# MessagesParseResponseAttachmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary** | **bool** |  | [optional] 
**content** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_parse_response_attachments_inner import MessagesParseResponseAttachmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesParseResponseAttachmentsInner from a JSON string
messages_parse_response_attachments_inner_instance = MessagesParseResponseAttachmentsInner.from_json(json)
# print the JSON string representation of the object
print(MessagesParseResponseAttachmentsInner.to_json())

# convert the object into a dict
messages_parse_response_attachments_inner_dict = messages_parse_response_attachments_inner_instance.to_dict()
# create an instance of MessagesParseResponseAttachmentsInner from a dict
messages_parse_response_attachments_inner_from_dict = MessagesParseResponseAttachmentsInner.from_dict(messages_parse_response_attachments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


