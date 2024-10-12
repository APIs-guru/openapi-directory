# UserInvitationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[UserInvitation]**](UserInvitation.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_invitations_response import UserInvitationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationsResponse from a JSON string
user_invitations_response_instance = UserInvitationsResponse.from_json(json)
# print the JSON string representation of the object
print(UserInvitationsResponse.to_json())

# convert the object into a dict
user_invitations_response_dict = user_invitations_response_instance.to_dict()
# create an instance of UserInvitationsResponse from a dict
user_invitations_response_from_dict = UserInvitationsResponse.from_dict(user_invitations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


