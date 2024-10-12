# AppInvitationsUpdatePermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions the user has for the app in the invitation | 

## Example

```python
from openapi_client.models.app_invitations_update_permissions_request import AppInvitationsUpdatePermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsUpdatePermissionsRequest from a JSON string
app_invitations_update_permissions_request_instance = AppInvitationsUpdatePermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsUpdatePermissionsRequest.to_json())

# convert the object into a dict
app_invitations_update_permissions_request_dict = app_invitations_update_permissions_request_instance.to_dict()
# create an instance of AppInvitationsUpdatePermissionsRequest from a dict
app_invitations_update_permissions_request_from_dict = AppInvitationsUpdatePermissionsRequest.from_dict(app_invitations_update_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


