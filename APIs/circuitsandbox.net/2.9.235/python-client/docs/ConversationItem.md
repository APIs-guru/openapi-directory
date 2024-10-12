# ConversationItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | Array of files attached to the item | [optional] 
**conv_id** | **str** | The ID of the conversation the item belongs to | [optional] 
**creation_time** | **float** | UTC timestamp when the item was created | [optional] 
**creator_id** | **str** | The ID of the user who created the conversation item | [optional] 
**include_in_unread_count** | **bool** | Indicates whether the item is included in the unread message count | [optional] 
**item_id** | **str** | The ID of the item | [optional] 
**modification_time** | **float** | UTC timestamp when the conversation was modified | [optional] 
**rtc** | [**RtcItem**](RtcItem.md) |  | [optional] 
**system** | [**SystemItem**](SystemItem.md) |  | [optional] 
**text** | [**ConversationTextItem**](ConversationTextItem.md) |  | [optional] 
**type** | **str** | The type of the conversation item. It can be one of the following TEXT, SYSTEM or RTC | [optional] 

## Example

```python
from openapi_client.models.conversation_item import ConversationItem

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationItem from a JSON string
conversation_item_instance = ConversationItem.from_json(json)
# print the JSON string representation of the object
print(ConversationItem.to_json())

# convert the object into a dict
conversation_item_dict = conversation_item_instance.to_dict()
# create an instance of ConversationItem from a dict
conversation_item_from_dict = ConversationItem.from_dict(conversation_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


