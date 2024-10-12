# WhatsApp1WhatsappConversation

An object contining data for the conversation to which the message relates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the conversation. | [optional] 
**origin** | [**WhatsApp1WhatsappConversationOrigin**](WhatsApp1WhatsappConversationOrigin.md) |  | [optional] 

## Example

```python
from openapi_client.models.whats_app1_whatsapp_conversation import WhatsApp1WhatsappConversation

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsApp1WhatsappConversation from a JSON string
whats_app1_whatsapp_conversation_instance = WhatsApp1WhatsappConversation.from_json(json)
# print the JSON string representation of the object
print(WhatsApp1WhatsappConversation.to_json())

# convert the object into a dict
whats_app1_whatsapp_conversation_dict = whats_app1_whatsapp_conversation_instance.to_dict()
# create an instance of WhatsApp1WhatsappConversation from a dict
whats_app1_whatsapp_conversation_from_dict = WhatsApp1WhatsappConversation.from_dict(whats_app1_whatsapp_conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


