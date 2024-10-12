# ClientUser

A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_account_id** | **str** | Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation. | [optional] 
**email** | **str** | User&#39;s email address. The value of this field is ignored in an update operation. | [optional] 
**status** | **str** | The status of the client user. | [optional] 
**user_id** | **str** | The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation. | [optional] 

## Example

```python
from openapi_client.models.client_user import ClientUser

# TODO update the JSON string below
json = "{}"
# create an instance of ClientUser from a JSON string
client_user_instance = ClientUser.from_json(json)
# print the JSON string representation of the object
print(ClientUser.to_json())

# convert the object into a dict
client_user_dict = client_user_instance.to_dict()
# create an instance of ClientUser from a dict
client_user_from_dict = ClientUser.from_dict(client_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


