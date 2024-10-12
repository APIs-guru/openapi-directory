# LiveChatGiftMembershipReceivedDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_membership_gifting_message_id** | **str** | The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is &#39;membershipGiftingEvent&#39;. | [optional] 
**gifter_channel_id** | **str** | The ID of the user that made the membership gifting purchase. This matches the &#x60;snippet.authorChannelId&#x60; of the associated membership gifting message. | [optional] 
**member_level_name** | **str** | The name of the Level at which the viewer is a member. This matches the &#x60;snippet.membershipGiftingDetails.giftMembershipsLevelName&#x60; of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn&#39;t filled. | [optional] 

## Example

```python
from openapi_client.models.live_chat_gift_membership_received_details import LiveChatGiftMembershipReceivedDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatGiftMembershipReceivedDetails from a JSON string
live_chat_gift_membership_received_details_instance = LiveChatGiftMembershipReceivedDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatGiftMembershipReceivedDetails.to_json())

# convert the object into a dict
live_chat_gift_membership_received_details_dict = live_chat_gift_membership_received_details_instance.to_dict()
# create an instance of LiveChatGiftMembershipReceivedDetails from a dict
live_chat_gift_membership_received_details_from_dict = LiveChatGiftMembershipReceivedDetails.from_dict(live_chat_gift_membership_received_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


