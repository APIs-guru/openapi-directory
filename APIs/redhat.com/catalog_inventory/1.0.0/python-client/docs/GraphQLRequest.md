# GraphQLRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_name** | **str** | If the Query contains several named operations, the operationName controls which one should be executed | [optional] [default to '']
**query** | **str** | The GraphQL query | [default to '{}']
**variables** | **object** | Optional Query variables | [optional] 

## Example

```python
from openapi_client.models.graph_ql_request import GraphQLRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQLRequest from a JSON string
graph_ql_request_instance = GraphQLRequest.from_json(json)
# print the JSON string representation of the object
print(GraphQLRequest.to_json())

# convert the object into a dict
graph_ql_request_dict = graph_ql_request_instance.to_dict()
# create an instance of GraphQLRequest from a dict
graph_ql_request_from_dict = GraphQLRequest.from_dict(graph_ql_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


