# ChannelMemberRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_expires** | **datetime** | Expiration date of the ban | [optional] 
**banned** | **bool** | Whether member is banned this channel or not | [optional] 
**channel_role** | **str** | Role of the member in the channel | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**invite_accepted_at** | **datetime** | Date when invite was accepted | [optional] 
**invite_rejected_at** | **datetime** | Date when invite was rejected | [optional] 
**invited** | **bool** | Whether member was invited or not | [optional] 
**is_moderator** | **bool** | Whether member is channel moderator or not | [optional] 
**role** | **str** | Permission level of the member in the channel (DEPRECATED: use channel_role instead) | [optional] 
**shadow_banned** | **bool** | Whether member is shadow banned in this channel or not | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.channel_member_request import ChannelMemberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMemberRequest from a JSON string
channel_member_request_instance = ChannelMemberRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelMemberRequest.to_json())

# convert the object into a dict
channel_member_request_dict = channel_member_request_instance.to_dict()
# create an instance of ChannelMemberRequest from a dict
channel_member_request_from_dict = ChannelMemberRequest.from_dict(channel_member_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


