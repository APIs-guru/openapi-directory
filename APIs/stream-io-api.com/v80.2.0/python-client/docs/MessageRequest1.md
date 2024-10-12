# MessageRequest1

Represents any chat message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[AttachmentRequest]**](AttachmentRequest.md) | Array of message attachments | [optional] 
**before_message_send_failed** | **bool** | Whether &#x60;before_message_send webhook&#x60; failed or not. Field is only accessible in push webhook | [optional] 
**cid** | **str** | Channel unique identifier in &lt;type&gt;:&lt;id&gt; format | [optional] 
**command** | **str** | Contains provided slash command | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**deleted_at** | **datetime** | Date/time of deletion | [optional] 
**html** | **str** | Contains HTML markup of the message. Can only be set when using server-side API | [optional] 
**i18n** | **Dict[str, str]** | Object with translations. Key &#x60;language&#x60; contains the original language key. Other keys contain translations | [optional] 
**id** | **str** | Message ID is unique string identifier of the message | [optional] 
**image_labels** | **Dict[str, List[str]]** | Contains image moderation information | [optional] 
**latest_reactions** | [**List[ReactionRequest]**](ReactionRequest.md) | List of 10 latest reactions to this message | [optional] 
**mentioned_users** | [**List[UserObjectRequest]**](UserObjectRequest.md) | List of mentioned users | [optional] 
**mml** | **str** | Should be empty if &#x60;text&#x60; is provided. Can only be set when using server-side API | 
**own_reactions** | [**List[ReactionRequest]**](ReactionRequest.md) | List of 10 latest reactions of authenticated user to this message | [optional] 
**parent_id** | **str** | ID of parent message (thread) | [optional] 
**pin_expires** | **datetime** | Date when pinned message expires | [optional] 
**pinned** | **bool** | Whether message is pinned or not | [optional] 
**pinned_at** | **datetime** | Date when message got pinned | [optional] 
**pinned_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**quoted_message** | [**MessageRequest1**](MessageRequest1.md) |  | [optional] 
**quoted_message_id** | **str** |  | [optional] 
**reaction_counts** | **Dict[str, int]** | An object containing number of reactions of each type. Key: reaction type (string), value: number of reactions (int) | [optional] 
**reaction_scores** | **Dict[str, int]** | An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int) | [optional] 
**reply_count** | **int** | Number of replies to this message | [optional] 
**shadowed** | **bool** | Whether the message was shadowed or not | [optional] 
**show_in_channel** | **bool** | Whether thread reply should be shown in the channel as well | [optional] 
**silent** | **bool** | Whether message is silent or not | [optional] 
**text** | **str** | Text of the message. Should be empty if &#x60;mml&#x60; is provided | 
**thread_participants** | [**List[UserObjectRequest]**](UserObjectRequest.md) | List of users who participate in thread | [optional] 
**type** | **str** | Contains type of the message | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_request1 import MessageRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of MessageRequest1 from a JSON string
message_request1_instance = MessageRequest1.from_json(json)
# print the JSON string representation of the object
print(MessageRequest1.to_json())

# convert the object into a dict
message_request1_dict = message_request1_instance.to_dict()
# create an instance of MessageRequest1 from a dict
message_request1_from_dict = MessageRequest1.from_dict(message_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


