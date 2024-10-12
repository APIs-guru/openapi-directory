# ConversationTextItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content of the text item | [optional] 
**content_type** | **str** | The type of the text item. It can be one of the following: RICH (with HTML content) or PLAIN (only text) | [optional] 
**form_meta_data** | **str** | The meta data form | [optional] 
**is_webhook_message** | **bool** | Is this a webhook message? | [optional] 
**liked_user_ids** | **List[str]** | Array of IDs of the users who liked the item | [optional] 
**parent_id** | **str** | The ID of the parent item of the text item. This field is optional and can be used for thread views | [optional] 
**preview** | [**Preview**](Preview.md) |  | [optional] 
**state** | **str** | The state of the text item. It can be one of the following: CREATED (which denotes that it was not modified since its creation), EDITED (which denotes that the creator of this item modified the item) or DELETED (which denotes that the item itself exists but its content was removed) | [optional] 
**subject** | **str** | TThe subject of the text item. This field is optional and maybe filled when creating the text item | [optional] 

## Example

```python
from openapi_client.models.conversation_text_item import ConversationTextItem

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationTextItem from a JSON string
conversation_text_item_instance = ConversationTextItem.from_json(json)
# print the JSON string representation of the object
print(ConversationTextItem.to_json())

# convert the object into a dict
conversation_text_item_dict = conversation_text_item_instance.to_dict()
# create an instance of ConversationTextItem from a dict
conversation_text_item_from_dict = ConversationTextItem.from_dict(conversation_text_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


