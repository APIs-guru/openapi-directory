# TokenUpdateTokens


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**List[SimpleTokenCommentResponse]**](SimpleTokenCommentResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_update_tokens import TokenUpdateTokens

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateTokens from a JSON string
token_update_tokens_instance = TokenUpdateTokens.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateTokens.to_json())

# convert the object into a dict
token_update_tokens_dict = token_update_tokens_instance.to_dict()
# create an instance of TokenUpdateTokens from a dict
token_update_tokens_from_dict = TokenUpdateTokens.from_dict(token_update_tokens_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


