# MessagesParseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[MessagesParseResponseAttachmentsInner]**](MessagesParseResponseAttachmentsInner.md) |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**headers** | [**MessagesContentResponseHeaders**](MessagesContentResponseHeaders.md) |  | [optional] 
**html** | **str** |  | [optional] 
**images** | [**List[MessagesContentResponseAttachmentsInner]**](MessagesContentResponseAttachmentsInner.md) |  | [optional] 
**subject** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**to** | [**List[MessagesContentResponseTo]**](MessagesContentResponseTo.md) |  | [optional] 

## Example

```python
from openapi_client.models.messages_parse_response import MessagesParseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesParseResponse from a JSON string
messages_parse_response_instance = MessagesParseResponse.from_json(json)
# print the JSON string representation of the object
print(MessagesParseResponse.to_json())

# convert the object into a dict
messages_parse_response_dict = messages_parse_response_instance.to_dict()
# create an instance of MessagesParseResponse from a dict
messages_parse_response_from_dict = MessagesParseResponse.from_dict(messages_parse_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


