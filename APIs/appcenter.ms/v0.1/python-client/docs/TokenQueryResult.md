# TokenQueryResult

Token query result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokens** | **List[str]** | List of tokens. | [optional] 

## Example

```python
from openapi_client.models.token_query_result import TokenQueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of TokenQueryResult from a JSON string
token_query_result_instance = TokenQueryResult.from_json(json)
# print the JSON string representation of the object
print(TokenQueryResult.to_json())

# convert the object into a dict
token_query_result_dict = token_query_result_instance.to_dict()
# create an instance of TokenQueryResult from a dict
token_query_result_from_dict = TokenQueryResult.from_dict(token_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


