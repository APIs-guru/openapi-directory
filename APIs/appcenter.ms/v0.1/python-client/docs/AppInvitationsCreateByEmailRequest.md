# AppInvitationsCreateByEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The role of the user to be added | [optional] 

## Example

```python
from openapi_client.models.app_invitations_create_by_email_request import AppInvitationsCreateByEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsCreateByEmailRequest from a JSON string
app_invitations_create_by_email_request_instance = AppInvitationsCreateByEmailRequest.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsCreateByEmailRequest.to_json())

# convert the object into a dict
app_invitations_create_by_email_request_dict = app_invitations_create_by_email_request_instance.to_dict()
# create an instance of AppInvitationsCreateByEmailRequest from a dict
app_invitations_create_by_email_request_from_dict = AppInvitationsCreateByEmailRequest.from_dict(app_invitations_create_by_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


