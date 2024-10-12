# TokenListResult

The result of a request to list tokens for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next list of tokens. | [optional] 
**value** | [**List[Token]**](Token.md) | The list of tokens. Since this list may be incomplete, the nextLink field should be used to request the next list of tokens. | [optional] 

## Example

```python
from openapi_client.models.token_list_result import TokenListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TokenListResult from a JSON string
token_list_result_instance = TokenListResult.from_json(json)
# print the JSON string representation of the object
print(TokenListResult.to_json())

# convert the object into a dict
token_list_result_dict = token_list_result_instance.to_dict()
# create an instance of TokenListResult from a dict
token_list_result_from_dict = TokenListResult.from_dict(token_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


