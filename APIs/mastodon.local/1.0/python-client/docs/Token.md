# Token

Represents an OAuth token used for authenticating with the API and performing actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | An OAuth token to be used for authorization. | [optional] 
**created_at** | **int** | When the token was generated. UNIX Timestamp. | [optional] 
**scope** | **str** | The OAuth scopes granted by this token, space-separated. | [optional] 
**token_type** | **str** | The OAuth token type. Mastodon uses &#x60;Bearer&#x60; tokens. | [optional] 

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


