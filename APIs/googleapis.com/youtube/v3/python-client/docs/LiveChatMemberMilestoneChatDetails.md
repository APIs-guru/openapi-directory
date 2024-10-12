# LiveChatMemberMilestoneChatDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_level_name** | **str** | The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn&#39;t filled. | [optional] 
**member_month** | **int** | The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users. | [optional] 
**user_comment** | **str** | The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member. | [optional] 

## Example

```python
from openapi_client.models.live_chat_member_milestone_chat_details import LiveChatMemberMilestoneChatDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMemberMilestoneChatDetails from a JSON string
live_chat_member_milestone_chat_details_instance = LiveChatMemberMilestoneChatDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatMemberMilestoneChatDetails.to_json())

# convert the object into a dict
live_chat_member_milestone_chat_details_dict = live_chat_member_milestone_chat_details_instance.to_dict()
# create an instance of LiveChatMemberMilestoneChatDetails from a dict
live_chat_member_milestone_chat_details_from_dict = LiveChatMemberMilestoneChatDetails.from_dict(live_chat_member_milestone_chat_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


