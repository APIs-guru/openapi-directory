# ParsedJqlQuery

Details of a parsed JQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | The list of syntax or validation errors. | [optional] 
**query** | **str** | The JQL query that was parsed and validated. | 
**structure** | [**JqlQuery**](JqlQuery.md) | The syntax tree of the query. Empty if the query was invalid. | [optional] 

## Example

```python
from openapi_client.models.parsed_jql_query import ParsedJqlQuery

# TODO update the JSON string below
json = "{}"
# create an instance of ParsedJqlQuery from a JSON string
parsed_jql_query_instance = ParsedJqlQuery.from_json(json)
# print the JSON string representation of the object
print(ParsedJqlQuery.to_json())

# convert the object into a dict
parsed_jql_query_dict = parsed_jql_query_instance.to_dict()
# create an instance of ParsedJqlQuery from a dict
parsed_jql_query_from_dict = ParsedJqlQuery.from_dict(parsed_jql_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


