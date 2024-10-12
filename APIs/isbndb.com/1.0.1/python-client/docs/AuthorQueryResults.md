# AuthorQueryResults

Describes the results of a query in the author's database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authors** | **List[str]** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.author_query_results import AuthorQueryResults

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorQueryResults from a JSON string
author_query_results_instance = AuthorQueryResults.from_json(json)
# print the JSON string representation of the object
print(AuthorQueryResults.to_json())

# convert the object into a dict
author_query_results_dict = author_query_results_instance.to_dict()
# create an instance of AuthorQueryResults from a dict
author_query_results_from_dict = AuthorQueryResults.from_dict(author_query_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


