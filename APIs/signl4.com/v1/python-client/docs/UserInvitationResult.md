# UserInvitationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** |  | [optional] 
**error_message** | **str** |  | [optional] 
**invited_user** | [**InvitedUserInfo**](InvitedUserInfo.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_invitation_result import UserInvitationResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationResult from a JSON string
user_invitation_result_instance = UserInvitationResult.from_json(json)
# print the JSON string representation of the object
print(UserInvitationResult.to_json())

# convert the object into a dict
user_invitation_result_dict = user_invitation_result_instance.to_dict()
# create an instance of UserInvitationResult from a dict
user_invitation_result_from_dict = UserInvitationResult.from_dict(user_invitation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


