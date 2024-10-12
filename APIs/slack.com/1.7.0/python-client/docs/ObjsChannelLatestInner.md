# ObjsChannelLatestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[ObjsMessageAttachmentsInner]**](ObjsMessageAttachmentsInner.md) |  | [optional] 
**blocks** | [**List[BlocksInner]**](BlocksInner.md) | This is a very loose definition, in the future, we&#39;ll populate this with deeper schema in this definition namespace. | [optional] 
**bot_id** | [**List[ObjsMessageBotIdInner]**](ObjsMessageBotIdInner.md) |  | [optional] 
**bot_profile** | [**ObjsBotProfile**](ObjsBotProfile.md) |  | [optional] 
**client_msg_id** | **str** |  | [optional] 
**comment** | [**ObjsComment**](ObjsComment.md) |  | [optional] 
**display_as_bot** | **bool** |  | [optional] 
**file** | [**ObjsFile**](ObjsFile.md) |  | [optional] 
**files** | [**List[ObjsFile]**](ObjsFile.md) |  | [optional] 
**icons** | [**ObjsMessageIcons**](ObjsMessageIcons.md) |  | [optional] 
**inviter** | **str** |  | [optional] 
**is_delayed_message** | **bool** |  | [optional] 
**is_intro** | **bool** |  | [optional] 
**is_starred** | **bool** |  | [optional] 
**last_read** | **str** |  | [optional] 
**latest_reply** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**old_name** | **str** |  | [optional] 
**parent_user_id** | **str** |  | [optional] 
**permalink** | **str** |  | [optional] 
**pinned_to** | **List[str]** |  | [optional] 
**purpose** | **str** |  | [optional] 
**reactions** | [**List[ObjsReaction]**](ObjsReaction.md) |  | [optional] 
**reply_count** | **int** |  | [optional] 
**reply_users** | **List[str]** |  | [optional] 
**reply_users_count** | **int** |  | [optional] 
**source_team** | **str** |  | [optional] 
**subscribed** | **bool** |  | [optional] 
**subtype** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**text** | **str** |  | 
**thread_ts** | **str** |  | [optional] 
**topic** | **str** |  | [optional] 
**ts** | **str** |  | 
**type** | **str** |  | 
**unread_count** | **int** |  | [optional] 
**upload** | **bool** |  | [optional] 
**user** | **str** |  | [optional] 
**user_profile** | [**ObjsUserProfileShort**](ObjsUserProfileShort.md) |  | [optional] 
**user_team** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.objs_channel_latest_inner import ObjsChannelLatestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsChannelLatestInner from a JSON string
objs_channel_latest_inner_instance = ObjsChannelLatestInner.from_json(json)
# print the JSON string representation of the object
print(ObjsChannelLatestInner.to_json())

# convert the object into a dict
objs_channel_latest_inner_dict = objs_channel_latest_inner_instance.to_dict()
# create an instance of ObjsChannelLatestInner from a dict
objs_channel_latest_inner_from_dict = ObjsChannelLatestInner.from_dict(objs_channel_latest_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


