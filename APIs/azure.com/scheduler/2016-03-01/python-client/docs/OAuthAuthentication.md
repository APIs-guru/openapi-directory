# OAuthAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Gets or sets the audience. | [optional] 
**client_id** | **str** | Gets or sets the client identifier. | [optional] 
**secret** | **str** | Gets or sets the secret, return value will always be empty. | [optional] 
**tenant** | **str** | Gets or sets the tenant. | [optional] 

## Example

```python
from openapi_client.models.o_auth_authentication import OAuthAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthAuthentication from a JSON string
o_auth_authentication_instance = OAuthAuthentication.from_json(json)
# print the JSON string representation of the object
print(OAuthAuthentication.to_json())

# convert the object into a dict
o_auth_authentication_dict = o_auth_authentication_instance.to_dict()
# create an instance of OAuthAuthentication from a dict
o_auth_authentication_from_dict = OAuthAuthentication.from_dict(o_auth_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


