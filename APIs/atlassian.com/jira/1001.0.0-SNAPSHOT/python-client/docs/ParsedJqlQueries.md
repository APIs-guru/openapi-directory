# ParsedJqlQueries

A list of parsed JQL queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[ParsedJqlQuery]**](ParsedJqlQuery.md) | A list of parsed JQL queries. | 

## Example

```python
from openapi_client.models.parsed_jql_queries import ParsedJqlQueries

# TODO update the JSON string below
json = "{}"
# create an instance of ParsedJqlQueries from a JSON string
parsed_jql_queries_instance = ParsedJqlQueries.from_json(json)
# print the JSON string representation of the object
print(ParsedJqlQueries.to_json())

# convert the object into a dict
parsed_jql_queries_dict = parsed_jql_queries_instance.to_dict()
# create an instance of ParsedJqlQueries from a dict
parsed_jql_queries_from_dict = ParsedJqlQueries.from_dict(parsed_jql_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


