# LoginResponse

Payload of successful login

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | True if this user is an admin. False otherwise | [optional] 
**login_id** | **int** | The login id for this user | [optional] 
**name** | **str** | This user&#39;s name | [optional] 
**read_only** | **bool** | True if this user has permissions to write to the database. False otherwise | [optional] 
**token** | **str** | The API key that will be used to authenticate the user. | [optional] 

## Example

```python
from openapi_client.models.login_response import LoginResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoginResponse from a JSON string
login_response_instance = LoginResponse.from_json(json)
# print the JSON string representation of the object
print(LoginResponse.to_json())

# convert the object into a dict
login_response_dict = login_response_instance.to_dict()
# create an instance of LoginResponse from a dict
login_response_from_dict = LoginResponse.from_dict(login_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


