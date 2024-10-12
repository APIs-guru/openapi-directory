# AppInvitationsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The user&#39;s role | [optional] 
**user_email** | **str** | The user&#39;s email address | 

## Example

```python
from openapi_client.models.app_invitations_create_request import AppInvitationsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsCreateRequest from a JSON string
app_invitations_create_request_instance = AppInvitationsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsCreateRequest.to_json())

# convert the object into a dict
app_invitations_create_request_dict = app_invitations_create_request_instance.to_dict()
# create an instance of AppInvitationsCreateRequest from a dict
app_invitations_create_request_from_dict = AppInvitationsCreateRequest.from_dict(app_invitations_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


