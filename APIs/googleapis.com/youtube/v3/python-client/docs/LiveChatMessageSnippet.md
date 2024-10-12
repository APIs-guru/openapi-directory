# LiveChatMessageSnippet

Next ID: 34

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_channel_id** | **str** | The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase pollEvent - the user that created the poll | [optional] 
**display_message** | **str** | Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. | [optional] 
**fan_funding_event_details** | [**LiveChatFanFundingEventDetails**](LiveChatFanFundingEventDetails.md) |  | [optional] 
**gift_membership_received_details** | [**LiveChatGiftMembershipReceivedDetails**](LiveChatGiftMembershipReceivedDetails.md) |  | [optional] 
**has_display_content** | **bool** | Whether the message has display content that should be displayed to users. | [optional] 
**live_chat_id** | **str** |  | [optional] 
**member_milestone_chat_details** | [**LiveChatMemberMilestoneChatDetails**](LiveChatMemberMilestoneChatDetails.md) |  | [optional] 
**membership_gifting_details** | [**LiveChatMembershipGiftingDetails**](LiveChatMembershipGiftingDetails.md) |  | [optional] 
**message_deleted_details** | [**LiveChatMessageDeletedDetails**](LiveChatMessageDeletedDetails.md) |  | [optional] 
**message_retracted_details** | [**LiveChatMessageRetractedDetails**](LiveChatMessageRetractedDetails.md) |  | [optional] 
**new_sponsor_details** | [**LiveChatNewSponsorDetails**](LiveChatNewSponsorDetails.md) |  | [optional] 
**poll_details** | [**LiveChatPollDetails**](LiveChatPollDetails.md) |  | [optional] 
**published_at** | **datetime** | The date and time when the message was orignally published. | [optional] 
**super_chat_details** | [**LiveChatSuperChatDetails**](LiveChatSuperChatDetails.md) |  | [optional] 
**super_sticker_details** | [**LiveChatSuperStickerDetails**](LiveChatSuperStickerDetails.md) |  | [optional] 
**text_message_details** | [**LiveChatTextMessageDetails**](LiveChatTextMessageDetails.md) |  | [optional] 
**type** | **str** | The type of message, this will always be present, it determines the contents of the message as well as which fields will be present. | [optional] 
**user_banned_details** | [**LiveChatUserBannedMessageDetails**](LiveChatUserBannedMessageDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_message_snippet import LiveChatMessageSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMessageSnippet from a JSON string
live_chat_message_snippet_instance = LiveChatMessageSnippet.from_json(json)
# print the JSON string representation of the object
print(LiveChatMessageSnippet.to_json())

# convert the object into a dict
live_chat_message_snippet_dict = live_chat_message_snippet_instance.to_dict()
# create an instance of LiveChatMessageSnippet from a dict
live_chat_message_snippet_from_dict = LiveChatMessageSnippet.from_dict(live_chat_message_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


