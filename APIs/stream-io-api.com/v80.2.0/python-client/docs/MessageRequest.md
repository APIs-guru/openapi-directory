# MessageRequest

Represents any chat message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[AttachmentRequest]**](AttachmentRequest.md) | Array of message attachments | 
**cid** | **List[int]** | Channel unique identifier in &lt;type&gt;:&lt;id&gt; format | [optional] 
**html** | **str** | Contains HTML markup of the message. Can only be set when using server-side API | [optional] 
**id** | **str** | Message ID is unique string identifier of the message | [optional] 
**mentioned_users** | **List[str]** | List of mentioned users | [optional] 
**mml** | **str** | Should be empty if &#x60;text&#x60; is provided. Can only be set when using server-side API | [optional] 
**parent** | **List[int]** |  | [optional] 
**parent_id** | **str** | ID of parent message (thread) | [optional] 
**pin_expires** | **datetime** | Date when pinned message expires | [optional] 
**pinned** | **bool** | Whether message is pinned or not | [optional] 
**pinned_at** | **datetime** | Date when message got pinned | [optional] 
**pinned_by** | **List[int]** | Contains user who pinned the message | [optional] 
**quoted_message_id** | **str** |  | [optional] 
**reaction_scores** | **List[int]** | An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int) | [optional] 
**show_in_channel** | **bool** | Whether thread reply should be shown in the channel as well | [optional] 
**silent** | **bool** | Whether message is silent or not | [optional] 
**text** | **str** | Text of the message. Should be empty if &#x60;mml&#x60; is provided | [optional] 
**type** | **str** | Contains type of the message | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_request import MessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MessageRequest from a JSON string
message_request_instance = MessageRequest.from_json(json)
# print the JSON string representation of the object
print(MessageRequest.to_json())

# convert the object into a dict
message_request_dict = message_request_instance.to_dict()
# create an instance of MessageRequest from a dict
message_request_from_dict = MessageRequest.from_dict(message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


