# ListInvitationsResponse

Response when listing invitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**List[Invitation]**](Invitation.md) | Invitations that match the list request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

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


