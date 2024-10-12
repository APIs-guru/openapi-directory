# JQLQueryWithUnknownUsers

JQL queries that contained users that could not be found

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_query** | **str** | The converted query, with accountIDs instead of user identifiers, or &#39;unknown&#39; for users that could not be found | [optional] 
**original_query** | **str** | The original query, for reference | [optional] 

## Example

```python
from openapi_client.models.jql_query_with_unknown_users import JQLQueryWithUnknownUsers

# TODO update the JSON string below
json = "{}"
# create an instance of JQLQueryWithUnknownUsers from a JSON string
jql_query_with_unknown_users_instance = JQLQueryWithUnknownUsers.from_json(json)
# print the JSON string representation of the object
print(JQLQueryWithUnknownUsers.to_json())

# convert the object into a dict
jql_query_with_unknown_users_dict = jql_query_with_unknown_users_instance.to_dict()
# create an instance of JQLQueryWithUnknownUsers from a dict
jql_query_with_unknown_users_from_dict = JQLQueryWithUnknownUsers.from_dict(jql_query_with_unknown_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


