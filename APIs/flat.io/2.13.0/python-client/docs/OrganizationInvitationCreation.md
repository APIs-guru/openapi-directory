# OrganizationInvitationCreation

The parameters to create an organization invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address you want to send the invitation to | [optional] 
**organization_role** | [**OrganizationRoles**](OrganizationRoles.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization_invitation_creation import OrganizationInvitationCreation

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInvitationCreation from a JSON string
organization_invitation_creation_instance = OrganizationInvitationCreation.from_json(json)
# print the JSON string representation of the object
print(OrganizationInvitationCreation.to_json())

# convert the object into a dict
organization_invitation_creation_dict = organization_invitation_creation_instance.to_dict()
# create an instance of OrganizationInvitationCreation from a dict
organization_invitation_creation_from_dict = OrganizationInvitationCreation.from_dict(organization_invitation_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


