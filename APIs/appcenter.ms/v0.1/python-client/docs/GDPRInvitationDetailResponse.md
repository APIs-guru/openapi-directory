# GDPRInvitationDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppsList200ResponseInner**](AppsList200ResponseInner.md) |  | [optional] 
**invitation_id** | **str** | The id of the invitation | 
**organization** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | [optional] 

## Example

```python
from openapi_client.models.gdpr_invitation_detail_response import GDPRInvitationDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GDPRInvitationDetailResponse from a JSON string
gdpr_invitation_detail_response_instance = GDPRInvitationDetailResponse.from_json(json)
# print the JSON string representation of the object
print(GDPRInvitationDetailResponse.to_json())

# convert the object into a dict
gdpr_invitation_detail_response_dict = gdpr_invitation_detail_response_instance.to_dict()
# create an instance of GDPRInvitationDetailResponse from a dict
gdpr_invitation_detail_response_from_dict = GDPRInvitationDetailResponse.from_dict(gdpr_invitation_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


