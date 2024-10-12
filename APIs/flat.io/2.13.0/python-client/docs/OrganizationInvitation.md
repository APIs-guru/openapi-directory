# OrganizationInvitation

Details of an invitation to join an organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_code** | **str** | Enrollment code to use when joining this organization | [optional] 
**email** | **str** | The email address this invitation was sent to | [optional] 
**id** | **str** | The invitation unique identifier | [optional] 
**invited_by** | **str** | The unique identifier of the User who created this invitation | [optional] 
**organization** | **str** | The unique identifier of the Organization owning this class | [optional] 
**organization_role** | [**OrganizationRoles**](OrganizationRoles.md) |  | [optional] 
**used_by** | **str** | The unique identifier of the User who used this invitation | [optional] 

## Example

```python
from openapi_client.models.organization_invitation import OrganizationInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInvitation from a JSON string
organization_invitation_instance = OrganizationInvitation.from_json(json)
# print the JSON string representation of the object
print(OrganizationInvitation.to_json())

# convert the object into a dict
organization_invitation_dict = organization_invitation_instance.to_dict()
# create an instance of OrganizationInvitation from a dict
organization_invitation_from_dict = OrganizationInvitation.from_dict(organization_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


