# OrgInvitationsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The user&#39;s role in the organizatiion | [optional] 

## Example

```python
from openapi_client.models.org_invitations_update_request import OrgInvitationsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrgInvitationsUpdateRequest from a JSON string
org_invitations_update_request_instance = OrgInvitationsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(OrgInvitationsUpdateRequest.to_json())

# convert the object into a dict
org_invitations_update_request_dict = org_invitations_update_request_instance.to_dict()
# create an instance of OrgInvitationsUpdateRequest from a dict
org_invitations_update_request_from_dict = OrgInvitationsUpdateRequest.from_dict(org_invitations_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


