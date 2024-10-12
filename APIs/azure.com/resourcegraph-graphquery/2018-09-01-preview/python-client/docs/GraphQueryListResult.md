# GraphQueryListResult

Graph query list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of queries. | [optional] 
**value** | [**List[GraphQueryResource]**](GraphQueryResource.md) | An array of graph queries. | [optional] [readonly] 

## Example

```python
from openapi_client.models.graph_query_list_result import GraphQueryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryListResult from a JSON string
graph_query_list_result_instance = GraphQueryListResult.from_json(json)
# print the JSON string representation of the object
print(GraphQueryListResult.to_json())

# convert the object into a dict
graph_query_list_result_dict = graph_query_list_result_instance.to_dict()
# create an instance of GraphQueryListResult from a dict
graph_query_list_result_from_dict = GraphQueryListResult.from_dict(graph_query_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


