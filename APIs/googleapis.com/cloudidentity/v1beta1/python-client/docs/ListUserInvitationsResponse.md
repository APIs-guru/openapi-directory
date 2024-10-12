# ListUserInvitationsResponse

Response message for UserInvitation listing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token for the next page. If not empty, indicates that there may be more &#x60;UserInvitation&#x60; resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call. | [optional] 
**user_invitations** | [**List[UserInvitation]**](UserInvitation.md) | The list of UserInvitation resources. | [optional] 

## Example

```python
from openapi_client.models.list_user_invitations_response import ListUserInvitationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserInvitationsResponse from a JSON string
list_user_invitations_response_instance = ListUserInvitationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserInvitationsResponse.to_json())

# convert the object into a dict
list_user_invitations_response_dict = list_user_invitations_response_instance.to_dict()
# create an instance of ListUserInvitationsResponse from a dict
list_user_invitations_response_from_dict = ListUserInvitationsResponse.from_dict(list_user_invitations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


