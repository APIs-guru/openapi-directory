# Token

Successful token response 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token issued by the authorization server. | [optional] 
**expires_at** | **int** | The time the access token will expire in seconds since epoch. | [optional] 
**expires_in** | **int** | The lifetime in seconds of the access token. | [optional] 
**id_token** | **str** | ID Token value associated with the authenticated session. | [optional] 
**refresh_token** | **str** | The refresh token issued to the client, if any. | [optional] 
**scope** | **str** | The scope of the granted tokens. | [optional] 
**token_type** | **str** |  | 

## Example

```python
from openapi_client.models.token import Token

# TODO update the JSON string below
json = "{}"
# create an instance of Token from a JSON string
token_instance = Token.from_json(json)
# print the JSON string representation of the object
print(Token.to_json())

# convert the object into a dict
token_dict = token_instance.to_dict()
# create an instance of Token from a dict
token_from_dict = Token.from_dict(token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


