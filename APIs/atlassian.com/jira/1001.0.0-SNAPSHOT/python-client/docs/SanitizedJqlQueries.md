# SanitizedJqlQueries

The sanitized JQL queries for the given account IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[SanitizedJqlQuery]**](SanitizedJqlQuery.md) | The list of sanitized JQL queries. | [optional] 

## Example

```python
from openapi_client.models.sanitized_jql_queries import SanitizedJqlQueries

# TODO update the JSON string below
json = "{}"
# create an instance of SanitizedJqlQueries from a JSON string
sanitized_jql_queries_instance = SanitizedJqlQueries.from_json(json)
# print the JSON string representation of the object
print(SanitizedJqlQueries.to_json())

# convert the object into a dict
sanitized_jql_queries_dict = sanitized_jql_queries_instance.to_dict()
# create an instance of SanitizedJqlQueries from a dict
sanitized_jql_queries_from_dict = SanitizedJqlQueries.from_dict(sanitized_jql_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


