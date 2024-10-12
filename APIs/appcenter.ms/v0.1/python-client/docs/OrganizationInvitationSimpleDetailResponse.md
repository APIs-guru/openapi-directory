# OrganizationInvitationSimpleDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the invited user | 
**id** | **str** | The unique ID (UUID) of the invitation | 
**role** | **str** | The role assigned to the invited user | 

## Example

```python
from openapi_client.models.organization_invitation_simple_detail_response import OrganizationInvitationSimpleDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInvitationSimpleDetailResponse from a JSON string
organization_invitation_simple_detail_response_instance = OrganizationInvitationSimpleDetailResponse.from_json(json)
# print the JSON string representation of the object
print(OrganizationInvitationSimpleDetailResponse.to_json())

# convert the object into a dict
organization_invitation_simple_detail_response_dict = organization_invitation_simple_detail_response_instance.to_dict()
# create an instance of OrganizationInvitationSimpleDetailResponse from a dict
organization_invitation_simple_detail_response_from_dict = OrganizationInvitationSimpleDetailResponse.from_dict(organization_invitation_simple_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


