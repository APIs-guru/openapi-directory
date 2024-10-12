# GraphQueryProperties

Properties that contain a graph query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of a graph query. | [optional] 
**query** | **str** | KQL query that will be graph. | 
**result_kind** | **str** | Enum indicating a type of graph query. | [optional] [readonly] 
**time_modified** | **datetime** | Date and time in UTC of the last modification that was made to this graph query definition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.graph_query_properties import GraphQueryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryProperties from a JSON string
graph_query_properties_instance = GraphQueryProperties.from_json(json)
# print the JSON string representation of the object
print(GraphQueryProperties.to_json())

# convert the object into a dict
graph_query_properties_dict = graph_query_properties_instance.to_dict()
# create an instance of GraphQueryProperties from a dict
graph_query_properties_from_dict = GraphQueryProperties.from_dict(graph_query_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


