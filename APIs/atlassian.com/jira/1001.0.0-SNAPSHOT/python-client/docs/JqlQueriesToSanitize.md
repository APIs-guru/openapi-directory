# JqlQueriesToSanitize

The list of JQL queries to sanitize for the given account IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[JqlQueryToSanitize]**](JqlQueryToSanitize.md) | The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries. | 

## Example

```python
from openapi_client.models.jql_queries_to_sanitize import JqlQueriesToSanitize

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueriesToSanitize from a JSON string
jql_queries_to_sanitize_instance = JqlQueriesToSanitize.from_json(json)
# print the JSON string representation of the object
print(JqlQueriesToSanitize.to_json())

# convert the object into a dict
jql_queries_to_sanitize_dict = jql_queries_to_sanitize_instance.to_dict()
# create an instance of JqlQueriesToSanitize from a dict
jql_queries_to_sanitize_from_dict = JqlQueriesToSanitize.from_dict(jql_queries_to_sanitize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


