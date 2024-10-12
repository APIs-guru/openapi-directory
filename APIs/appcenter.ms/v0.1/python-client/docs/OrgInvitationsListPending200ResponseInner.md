# OrgInvitationsListPending200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the invited user | 
**id** | **str** | The unique ID (UUID) of the invitation | 
**role** | **str** | The role assigned to the invited user | 

## Example

```python
from openapi_client.models.org_invitations_list_pending200_response_inner import OrgInvitationsListPending200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrgInvitationsListPending200ResponseInner from a JSON string
org_invitations_list_pending200_response_inner_instance = OrgInvitationsListPending200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(OrgInvitationsListPending200ResponseInner.to_json())

# convert the object into a dict
org_invitations_list_pending200_response_inner_dict = org_invitations_list_pending200_response_inner_instance.to_dict()
# create an instance of OrgInvitationsListPending200ResponseInner from a dict
org_invitations_list_pending200_response_inner_from_dict = OrgInvitationsListPending200ResponseInner.from_dict(org_invitations_list_pending200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


