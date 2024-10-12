# GraphQLResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | Results from the GraphQL query | [optional] 
**errors** | **List[object]** | Errors resulting from the GraphQL query | [optional] 

## Example

```python
from openapi_client.models.graph_ql_response import GraphQLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQLResponse from a JSON string
graph_ql_response_instance = GraphQLResponse.from_json(json)
# print the JSON string representation of the object
print(GraphQLResponse.to_json())

# convert the object into a dict
graph_ql_response_dict = graph_ql_response_instance.to_dict()
# create an instance of GraphQLResponse from a dict
graph_ql_response_from_dict = GraphQLResponse.from_dict(graph_ql_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


