# ListGuardianInvitationsResponse

Response when listing guardian invitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guardian_invitations** | [**List[GuardianInvitation]**](GuardianInvitation.md) | Guardian invitations that matched the list request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_guardian_invitations_response import ListGuardianInvitationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGuardianInvitationsResponse from a JSON string
list_guardian_invitations_response_instance = ListGuardianInvitationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListGuardianInvitationsResponse.to_json())

# convert the object into a dict
list_guardian_invitations_response_dict = list_guardian_invitations_response_instance.to_dict()
# create an instance of ListGuardianInvitationsResponse from a dict
list_guardian_invitations_response_from_dict = ListGuardianInvitationsResponse.from_dict(list_guardian_invitations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


