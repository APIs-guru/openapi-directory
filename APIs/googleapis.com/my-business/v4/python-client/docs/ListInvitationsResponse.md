# ListInvitationsResponse

Response message for AccessControl.ListInvitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**List[Invitation]**](Invitation.md) | A collection of location invitations that are pending for the account. The number of invitations listed here cannot exceed 1000. | [optional] 

## Example

```python
from openapi_client.models.list_invitations_response import ListInvitationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInvitationsResponse from a JSON string
list_invitations_response_instance = ListInvitationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInvitationsResponse.to_json())

# convert the object into a dict
list_invitations_response_dict = list_invitations_response_instance.to_dict()
# create an instance of ListInvitationsResponse from a dict
list_invitations_response_from_dict = ListInvitationsResponse.from_dict(list_invitations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


