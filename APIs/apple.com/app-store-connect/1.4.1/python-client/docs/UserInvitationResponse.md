# UserInvitationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UserInvitation**](UserInvitation.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.user_invitation_response import UserInvitationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationResponse from a JSON string
user_invitation_response_instance = UserInvitationResponse.from_json(json)
# print the JSON string representation of the object
print(UserInvitationResponse.to_json())

# convert the object into a dict
user_invitation_response_dict = user_invitation_response_instance.to_dict()
# create an instance of UserInvitationResponse from a dict
user_invitation_response_from_dict = UserInvitationResponse.from_dict(user_invitation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


