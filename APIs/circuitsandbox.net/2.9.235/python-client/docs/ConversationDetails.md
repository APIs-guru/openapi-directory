# ConversationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bridge_numbers** | [**List[BridgeNumber]**](BridgeNumber.md) | A list of bridge numbers which can be used to dial in to the real time session via phone | [optional] 
**conv_id** | **str** | missing documentation | [optional] 
**conversation_creator_id** | **str** | The user ID of the conversation creator | [optional] 
**is_moderation_allowed** | **bool** | Indicates if the conversation is allowed to be moderated | [optional] 
**is_recording_allowed** | **bool** | Indicates if the conversation is allowed to be recorded | [optional] 
**link** | **str** | A link that can be used in a browser to join the session | [optional] 
**pin** | **str** | The PIN to join a real time session via phone | [optional] 

## Example

```python
from openapi_client.models.conversation_details import ConversationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationDetails from a JSON string
conversation_details_instance = ConversationDetails.from_json(json)
# print the JSON string representation of the object
print(ConversationDetails.to_json())

# convert the object into a dict
conversation_details_dict = conversation_details_instance.to_dict()
# create an instance of ConversationDetails from a dict
conversation_details_from_dict = ConversationDetails.from_dict(conversation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


