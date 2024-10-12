# IssuesAndJQLQueries

List of issues and JQL queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_ids** | **List[int]** | A list of issue IDs. | 
**jqls** | **List[str]** | A list of JQL queries. | 

## Example

```python
from openapi_client.models.issues_and_jql_queries import IssuesAndJQLQueries

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesAndJQLQueries from a JSON string
issues_and_jql_queries_instance = IssuesAndJQLQueries.from_json(json)
# print the JSON string representation of the object
print(IssuesAndJQLQueries.to_json())

# convert the object into a dict
issues_and_jql_queries_dict = issues_and_jql_queries_instance.to_dict()
# create an instance of IssuesAndJQLQueries from a dict
issues_and_jql_queries_from_dict = IssuesAndJQLQueries.from_dict(issues_and_jql_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


