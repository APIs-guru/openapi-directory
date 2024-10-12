# AuthorizationCode

Defines an authorization code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The Authorization Code in ASCII. It can be used to transfer the domain to or from another registrar. | [optional] 

## Example

```python
from openapi_client.models.authorization_code import AuthorizationCode

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCode from a JSON string
authorization_code_instance = AuthorizationCode.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCode.to_json())

# convert the object into a dict
authorization_code_dict = authorization_code_instance.to_dict()
# create an instance of AuthorizationCode from a dict
authorization_code_from_dict = AuthorizationCode.from_dict(authorization_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


