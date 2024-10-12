# UserInvitationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UserInvitationCreateRequestData**](UserInvitationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.user_invitation_create_request import UserInvitationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationCreateRequest from a JSON string
user_invitation_create_request_instance = UserInvitationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(UserInvitationCreateRequest.to_json())

# convert the object into a dict
user_invitation_create_request_dict = user_invitation_create_request_instance.to_dict()
# create an instance of UserInvitationCreateRequest from a dict
user_invitation_create_request_from_dict = UserInvitationCreateRequest.from_dict(user_invitation_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


