# QueryResults

Contains the tables, columns & rows resulting from a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tables** | [**List[Table]**](Table.md) | The list of tables, columns and rows. | 

## Example

```python
from openapi_client.models.query_results import QueryResults

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResults from a JSON string
query_results_instance = QueryResults.from_json(json)
# print the JSON string representation of the object
print(QueryResults.to_json())

# convert the object into a dict
query_results_dict = query_results_instance.to_dict()
# create an instance of QueryResults from a dict
query_results_from_dict = QueryResults.from_dict(query_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


