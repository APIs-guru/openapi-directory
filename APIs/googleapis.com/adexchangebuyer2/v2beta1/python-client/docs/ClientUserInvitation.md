# ClientUserInvitation

An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_account_id** | **str** | Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations. | [optional] 
**email** | **str** | The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer. | [optional] 
**invitation_id** | **str** | The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations. | [optional] 

## Example

```python
from openapi_client.models.client_user_invitation import ClientUserInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of ClientUserInvitation from a JSON string
client_user_invitation_instance = ClientUserInvitation.from_json(json)
# print the JSON string representation of the object
print(ClientUserInvitation.to_json())

# convert the object into a dict
client_user_invitation_dict = client_user_invitation_instance.to_dict()
# create an instance of ClientUserInvitation from a dict
client_user_invitation_from_dict = ClientUserInvitation.from_dict(client_user_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


