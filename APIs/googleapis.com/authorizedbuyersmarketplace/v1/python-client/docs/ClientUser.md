# ClientUser

A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. The client user&#39;s email address that has to be unique across all users for the same client. | [optional] 
**name** | **str** | Output only. The resource name of the client user. Format: &#x60;buyers/{accountId}/clients/{clientAccountId}/users/{userId}&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The state of the client user. | [optional] [readonly] 

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


