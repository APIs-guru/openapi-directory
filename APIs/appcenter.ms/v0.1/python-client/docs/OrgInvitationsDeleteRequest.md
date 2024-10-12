# OrgInvitationsDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_email** | **str** | The user&#39;s email address | 

## Example

```python
from openapi_client.models.org_invitations_delete_request import OrgInvitationsDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrgInvitationsDeleteRequest from a JSON string
org_invitations_delete_request_instance = OrgInvitationsDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(OrgInvitationsDeleteRequest.to_json())

# convert the object into a dict
org_invitations_delete_request_dict = org_invitations_delete_request_instance.to_dict()
# create an instance of OrgInvitationsDeleteRequest from a dict
org_invitations_delete_request_from_dict = OrgInvitationsDeleteRequest.from_dict(org_invitations_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


