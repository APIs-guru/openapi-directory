# InvitationDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppsList200ResponseInner**](AppsList200ResponseInner.md) |  | [optional] 
**invitation_id** | **str** | The id of the invitation | 
**invited_by** | [**AppInvitationsList200ResponseInvitedBy**](AppInvitationsList200ResponseInvitedBy.md) |  | 
**organization** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | [optional] 

## Example

```python
from openapi_client.models.invitation_detail_response import InvitationDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationDetailResponse from a JSON string
invitation_detail_response_instance = InvitationDetailResponse.from_json(json)
# print the JSON string representation of the object
print(InvitationDetailResponse.to_json())

# convert the object into a dict
invitation_detail_response_dict = invitation_detail_response_instance.to_dict()
# create an instance of InvitationDetailResponse from a dict
invitation_detail_response_from_dict = InvitationDetailResponse.from_dict(invitation_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


