# LiveChatMembershipGiftingDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gift_memberships_count** | **int** | The number of gift memberships purchased by the user. | [optional] 
**gift_memberships_level_name** | **str** | The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn&#39;t filled. | [optional] 

## Example

```python
from openapi_client.models.live_chat_membership_gifting_details import LiveChatMembershipGiftingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatMembershipGiftingDetails from a JSON string
live_chat_membership_gifting_details_instance = LiveChatMembershipGiftingDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatMembershipGiftingDetails.to_json())

# convert the object into a dict
live_chat_membership_gifting_details_dict = live_chat_membership_gifting_details_instance.to_dict()
# create an instance of LiveChatMembershipGiftingDetails from a dict
live_chat_membership_gifting_details_from_dict = LiveChatMembershipGiftingDetails.from_dict(live_chat_membership_gifting_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


