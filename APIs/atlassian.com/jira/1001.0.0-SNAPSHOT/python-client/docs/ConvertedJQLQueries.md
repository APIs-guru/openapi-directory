# ConvertedJQLQueries

The converted JQL queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries_with_unknown_users** | [**List[JQLQueryWithUnknownUsers]**](JQLQueryWithUnknownUsers.md) | List of queries containing user information that could not be mapped to an existing user | [optional] 
**query_strings** | **List[str]** | The list of converted query strings with account IDs in place of user identifiers. | [optional] 

## Example

```python
from openapi_client.models.converted_jql_queries import ConvertedJQLQueries

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertedJQLQueries from a JSON string
converted_jql_queries_instance = ConvertedJQLQueries.from_json(json)
# print the JSON string representation of the object
print(ConvertedJQLQueries.to_json())

# convert the object into a dict
converted_jql_queries_dict = converted_jql_queries_instance.to_dict()
# create an instance of ConvertedJQLQueries from a dict
converted_jql_queries_from_dict = ConvertedJQLQueries.from_dict(converted_jql_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


