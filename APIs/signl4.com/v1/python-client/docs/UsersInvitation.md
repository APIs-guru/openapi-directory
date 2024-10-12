# UsersInvitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inviter_id** | **str** |  | [optional] 
**invites** | [**List[UserInvite]**](UserInvite.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_invitation import UsersInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInvitation from a JSON string
users_invitation_instance = UsersInvitation.from_json(json)
# print the JSON string representation of the object
print(UsersInvitation.to_json())

# convert the object into a dict
users_invitation_dict = users_invitation_instance.to_dict()
# create an instance of UsersInvitation from a dict
users_invitation_from_dict = UsersInvitation.from_dict(users_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


