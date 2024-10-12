# ConversationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Conversation**](Conversation.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.conversation_response import ConversationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationResponse from a JSON string
conversation_response_instance = ConversationResponse.from_json(json)
# print the JSON string representation of the object
print(ConversationResponse.to_json())

# convert the object into a dict
conversation_response_dict = conversation_response_instance.to_dict()
# create an instance of ConversationResponse from a dict
conversation_response_from_dict = ConversationResponse.from_dict(conversation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


