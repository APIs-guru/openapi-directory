# OrganizationInvitationDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the invited user | 
**id** | **str** | The unique ID (UUID) of the invitation | 
**invited_by** | [**AppInvitationsList200ResponseInvitedBy**](AppInvitationsList200ResponseInvitedBy.md) |  | 
**is_existing_user** | **bool** | Indicates whether the invited user already exists | 
**organization** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | 
**role** | **str** | The role assigned to the invited user | [optional] 

## Example

```python
from openapi_client.models.organization_invitation_detail_response import OrganizationInvitationDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInvitationDetailResponse from a JSON string
organization_invitation_detail_response_instance = OrganizationInvitationDetailResponse.from_json(json)
# print the JSON string representation of the object
print(OrganizationInvitationDetailResponse.to_json())

# convert the object into a dict
organization_invitation_detail_response_dict = organization_invitation_detail_response_instance.to_dict()
# create an instance of OrganizationInvitationDetailResponse from a dict
organization_invitation_detail_response_from_dict = OrganizationInvitationDetailResponse.from_dict(organization_invitation_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


