# UserInvitationPermissionsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions the user has for the app in the invitation | 

## Example

```python
from openapi_client.models.user_invitation_permissions_update_request import UserInvitationPermissionsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationPermissionsUpdateRequest from a JSON string
user_invitation_permissions_update_request_instance = UserInvitationPermissionsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(UserInvitationPermissionsUpdateRequest.to_json())

# convert the object into a dict
user_invitation_permissions_update_request_dict = user_invitation_permissions_update_request_instance.to_dict()
# create an instance of UserInvitationPermissionsUpdateRequest from a dict
user_invitation_permissions_update_request_from_dict = UserInvitationPermissionsUpdateRequest.from_dict(user_invitation_permissions_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


