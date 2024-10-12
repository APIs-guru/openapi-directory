# ListClientUserInvitationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**List[ClientUserInvitation]**](ClientUserInvitation.md) | The returned list of client users. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_client_user_invitations_response import ListClientUserInvitationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListClientUserInvitationsResponse from a JSON string
list_client_user_invitations_response_instance = ListClientUserInvitationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListClientUserInvitationsResponse.to_json())

# convert the object into a dict
list_client_user_invitations_response_dict = list_client_user_invitations_response_instance.to_dict()
# create an instance of ListClientUserInvitationsResponse from a dict
list_client_user_invitations_response_from_dict = ListClientUserInvitationsResponse.from_dict(list_client_user_invitations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


