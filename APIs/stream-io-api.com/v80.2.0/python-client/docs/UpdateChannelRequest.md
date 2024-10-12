# UpdateChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_invite** | **bool** | Set to &#x60;true&#x60; to accept the invite | [optional] 
**add_members** | [**List[ChannelMemberRequest]**](ChannelMemberRequest.md) | List of user IDs to add to the channel | [optional] 
**add_moderators** | **List[str]** | List of user IDs to make channel moderators | 
**assign_roles** | [**List[ChannelMemberRequest]**](ChannelMemberRequest.md) | List of channel member role assignments. If any specified user is not part of the channel, the request will fail | [optional] 
**cooldown** | **int** | Sets cool down period for the channel in seconds | [optional] 
**data** | [**ChannelRequest**](ChannelRequest.md) |  | [optional] 
**demote_moderators** | **List[str]** | List of user IDs to take away moderators status from | 
**hide_history** | **bool** | Set to &#x60;true&#x60; to hide channel&#39;s history when adding new members | [optional] 
**invites** | [**List[ChannelMemberRequest]**](ChannelMemberRequest.md) | List of user IDs to invite to the channel | [optional] 
**message** | [**MessageRequest**](MessageRequest.md) |  | [optional] 
**reject_invite** | **bool** | Set to &#x60;true&#x60; to reject the invite | [optional] 
**remove_members** | **List[str]** | List of user IDs to remove from the channel | 
**skip_push** | **bool** | When &#x60;message&#x60; is set disables all push notifications for it | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_channel_request import UpdateChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChannelRequest from a JSON string
update_channel_request_instance = UpdateChannelRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChannelRequest.to_json())

# convert the object into a dict
update_channel_request_dict = update_channel_request_instance.to_dict()
# create an instance of UpdateChannelRequest from a dict
update_channel_request_from_dict = UpdateChannelRequest.from_dict(update_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


