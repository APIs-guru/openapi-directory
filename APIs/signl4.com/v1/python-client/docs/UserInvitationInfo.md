# UserInvitationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inviter_id** | **str** |  | [optional] 
**user_mail** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_invitation_info import UserInvitationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationInfo from a JSON string
user_invitation_info_instance = UserInvitationInfo.from_json(json)
# print the JSON string representation of the object
print(UserInvitationInfo.to_json())

# convert the object into a dict
user_invitation_info_dict = user_invitation_info_instance.to_dict()
# create an instance of UserInvitationInfo from a dict
user_invitation_info_from_dict = UserInvitationInfo.from_dict(user_invitation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


