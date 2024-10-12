# ResendInvitationsRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_id** | **int** | ID number of recipient to send a new invitation to. | [optional] 

## Example

```python
from openapi_client.models.resend_invitations_request_body import ResendInvitationsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ResendInvitationsRequestBody from a JSON string
resend_invitations_request_body_instance = ResendInvitationsRequestBody.from_json(json)
# print the JSON string representation of the object
print(ResendInvitationsRequestBody.to_json())

# convert the object into a dict
resend_invitations_request_body_dict = resend_invitations_request_body_instance.to_dict()
# create an instance of ResendInvitationsRequestBody from a dict
resend_invitations_request_body_from_dict = ResendInvitationsRequestBody.from_dict(resend_invitations_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


