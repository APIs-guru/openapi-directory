# LoginStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountid** | **int** | Account id | [optional] 
**canprovoke** | **bool** | True if a login can be pushed from the server, false otherwise | [optional] 
**hsid** | **str** | Converted session id, used by the websockets | [optional] 
**loggedin** | **bool** | True if the user is loggedin, false otherwise | [optional] 
**loginqrdata** | **str** | Base64 encoded data that is represented in the login qr code | [optional] 
**pk** | **str** | Base64 encoded public key of the nextAuth app. This uniquely identifies the account on the nextAuth app, regardless of the username | [optional] 
**userid** | **str** | User name | [optional] 

## Example

```python
from openapi_client.models.login_status import LoginStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LoginStatus from a JSON string
login_status_instance = LoginStatus.from_json(json)
# print the JSON string representation of the object
print(LoginStatus.to_json())

# convert the object into a dict
login_status_dict = login_status_instance.to_dict()
# create an instance of LoginStatus from a dict
login_status_from_dict = LoginStatus.from_dict(login_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


