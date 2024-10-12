# TokenPassword

The password that will be used for authenticating the token of a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The creation datetime of the password. | [optional] 
**expiry** | **datetime** | The expiry datetime of the password. | [optional] 
**name** | **str** | The password name \&quot;password1\&quot; or \&quot;password2\&quot; | [optional] 
**value** | **str** | The password value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.token_password import TokenPassword

# TODO update the JSON string below
json = "{}"
# create an instance of TokenPassword from a JSON string
token_password_instance = TokenPassword.from_json(json)
# print the JSON string representation of the object
print(TokenPassword.to_json())

# convert the object into a dict
token_password_dict = token_password_instance.to_dict()
# create an instance of TokenPassword from a dict
token_password_from_dict = TokenPassword.from_dict(token_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


