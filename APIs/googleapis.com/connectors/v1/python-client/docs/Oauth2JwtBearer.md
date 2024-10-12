# Oauth2JwtBearer

Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_key** | [**Secret**](Secret.md) |  | [optional] 
**jwt_claims** | [**JwtClaims**](JwtClaims.md) |  | [optional] 

## Example

```python
from openapi_client.models.oauth2_jwt_bearer import Oauth2JwtBearer

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2JwtBearer from a JSON string
oauth2_jwt_bearer_instance = Oauth2JwtBearer.from_json(json)
# print the JSON string representation of the object
print(Oauth2JwtBearer.to_json())

# convert the object into a dict
oauth2_jwt_bearer_dict = oauth2_jwt_bearer_instance.to_dict()
# create an instance of Oauth2JwtBearer from a dict
oauth2_jwt_bearer_from_dict = Oauth2JwtBearer.from_dict(oauth2_jwt_bearer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


