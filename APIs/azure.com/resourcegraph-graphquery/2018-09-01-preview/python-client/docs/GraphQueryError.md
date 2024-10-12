# GraphQueryError

Error message body that will indicate why the operation failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[ErrorFieldContract]**](ErrorFieldContract.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.graph_query_error import GraphQueryError

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryError from a JSON string
graph_query_error_instance = GraphQueryError.from_json(json)
# print the JSON string representation of the object
print(GraphQueryError.to_json())

# convert the object into a dict
graph_query_error_dict = graph_query_error_instance.to_dict()
# create an instance of GraphQueryError from a dict
graph_query_error_from_dict = GraphQueryError.from_dict(graph_query_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


