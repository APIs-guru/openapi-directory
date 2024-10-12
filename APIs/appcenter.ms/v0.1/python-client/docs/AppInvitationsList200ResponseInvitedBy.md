# AppInvitationsList200ResponseInvitedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**can_change_password** | **bool** | User is required to send an old password in order to change the password. | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**id** | **str** | The unique id (UUID) of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**origin** | **str** | The creation origin of this user | 
**permissions** | **List[str]** | The permissions the user has for the app | [optional] 

## Example

```python
from openapi_client.models.app_invitations_list200_response_invited_by import AppInvitationsList200ResponseInvitedBy

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsList200ResponseInvitedBy from a JSON string
app_invitations_list200_response_invited_by_instance = AppInvitationsList200ResponseInvitedBy.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsList200ResponseInvitedBy.to_json())

# convert the object into a dict
app_invitations_list200_response_invited_by_dict = app_invitations_list200_response_invited_by_instance.to_dict()
# create an instance of AppInvitationsList200ResponseInvitedBy from a dict
app_invitations_list200_response_invited_by_from_dict = AppInvitationsList200ResponseInvitedBy.from_dict(app_invitations_list200_response_invited_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


