# CreateDmConversationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_type** | **str** | The conversation type that is being created. | 
**message** | [**CreateMessageRequest**](CreateMessageRequest.md) |  | 
**participant_ids** | **List[str]** | Participants for the DM Conversation. | 

## Example

```python
from openapi_client.models.create_dm_conversation_request import CreateDmConversationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDmConversationRequest from a JSON string
create_dm_conversation_request_instance = CreateDmConversationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDmConversationRequest.to_json())

# convert the object into a dict
create_dm_conversation_request_dict = create_dm_conversation_request_instance.to_dict()
# create an instance of CreateDmConversationRequest from a dict
create_dm_conversation_request_from_dict = CreateDmConversationRequest.from_dict(create_dm_conversation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


