# GremlinGraphListResult

The List operation response, that contains the graphs and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GremlinGraphGetResults]**](GremlinGraphGetResults.md) | List of graphs and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gremlin_graph_list_result import GremlinGraphListResult

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphListResult from a JSON string
gremlin_graph_list_result_instance = GremlinGraphListResult.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphListResult.to_json())

# convert the object into a dict
gremlin_graph_list_result_dict = gremlin_graph_list_result_instance.to_dict()
# create an instance of GremlinGraphListResult from a dict
gremlin_graph_list_result_from_dict = GremlinGraphListResult.from_dict(gremlin_graph_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


