# JqlQueriesToParse

A list of JQL queries to parse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | **List[str]** | A list of queries to parse. | 

## Example

```python
from openapi_client.models.jql_queries_to_parse import JqlQueriesToParse

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueriesToParse from a JSON string
jql_queries_to_parse_instance = JqlQueriesToParse.from_json(json)
# print the JSON string representation of the object
print(JqlQueriesToParse.to_json())

# convert the object into a dict
jql_queries_to_parse_dict = jql_queries_to_parse_instance.to_dict()
# create an instance of JqlQueriesToParse from a dict
jql_queries_to_parse_from_dict = JqlQueriesToParse.from_dict(jql_queries_to_parse_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


