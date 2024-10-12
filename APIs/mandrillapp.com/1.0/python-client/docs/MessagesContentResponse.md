# MessagesContentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**attachments** | [**List[MessagesContentResponseAttachmentsInner]**](MessagesContentResponseAttachmentsInner.md) |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**headers** | [**MessagesContentResponseHeaders**](MessagesContentResponseHeaders.md) |  | [optional] 
**html** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**text** | **str** |  | [optional] 
**to** | [**MessagesContentResponseTo**](MessagesContentResponseTo.md) |  | [optional] 
**ts** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.messages_content_response import MessagesContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesContentResponse from a JSON string
messages_content_response_instance = MessagesContentResponse.from_json(json)
# print the JSON string representation of the object
print(MessagesContentResponse.to_json())

# convert the object into a dict
messages_content_response_dict = messages_content_response_instance.to_dict()
# create an instance of MessagesContentResponse from a dict
messages_content_response_from_dict = MessagesContentResponse.from_dict(messages_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


