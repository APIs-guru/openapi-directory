# Message

Represents any chat message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | Array of message attachments | 
**before_message_send_failed** | **bool** | Whether &#x60;before_message_send webhook&#x60; failed or not. Field is only accessible in push webhook | [optional] 
**cid** | **str** | Channel unique identifier in &lt;type&gt;:&lt;id&gt; format | 
**command** | **str** | Contains provided slash command | [optional] 
**created_at** | **datetime** | Date/time of creation | 
**deleted_at** | **datetime** | Date/time of deletion | [optional] 
**html** | **str** | Contains HTML markup of the message. Can only be set when using server-side API | 
**i18n** | **Dict[str, str]** | Object with translations. Key &#x60;language&#x60; contains the original language key. Other keys contain translations | [optional] 
**id** | **str** | Message ID is unique string identifier of the message | 
**image_labels** | **Dict[str, List[str]]** | Contains image moderation information | [optional] 
**latest_reactions** | [**List[Reaction]**](Reaction.md) | List of 10 latest reactions to this message | 
**mentioned_users** | [**List[UserObject]**](UserObject.md) | List of mentioned users | 
**mml** | **str** | Should be empty if &#x60;text&#x60; is provided. Can only be set when using server-side API | [optional] 
**own_reactions** | [**List[Reaction]**](Reaction.md) | List of 10 latest reactions of authenticated user to this message | 
**parent_id** | **str** | ID of parent message (thread) | [optional] 
**pin_expires** | **datetime** | Date when pinned message expires | [optional] 
**pinned** | **bool** | Whether message is pinned or not | 
**pinned_at** | **datetime** | Date when message got pinned | [optional] 
**pinned_by** | [**UserObject**](UserObject.md) |  | [optional] 
**quoted_message** | [**Message**](Message.md) |  | [optional] 
**quoted_message_id** | **str** |  | [optional] 
**reaction_counts** | **Dict[str, int]** | An object containing number of reactions of each type. Key: reaction type (string), value: number of reactions (int) | 
**reaction_scores** | **Dict[str, int]** | An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int) | 
**reply_count** | **int** | Number of replies to this message | 
**shadowed** | **bool** | Whether the message was shadowed or not | 
**show_in_channel** | **bool** | Whether thread reply should be shown in the channel as well | [optional] 
**silent** | **bool** | Whether message is silent or not | 
**text** | **str** | Text of the message. Should be empty if &#x60;mml&#x60; is provided | 
**thread_participants** | [**List[UserObject]**](UserObject.md) | List of users who participate in thread | [optional] 
**type** | **str** | Contains type of the message | 
**updated_at** | **datetime** | Date/time of the last update | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


