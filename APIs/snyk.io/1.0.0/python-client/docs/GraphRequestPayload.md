# GraphRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**DepGraphData**](DepGraphData.md) |  | 

## Example

```python
from openapi_client.models.graph_request_payload import GraphRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GraphRequestPayload from a JSON string
graph_request_payload_instance = GraphRequestPayload.from_json(json)
# print the JSON string representation of the object
print(GraphRequestPayload.to_json())

# convert the object into a dict
graph_request_payload_dict = graph_request_payload_instance.to_dict()
# create an instance of GraphRequestPayload from a dict
graph_request_payload_from_dict = GraphRequestPayload.from_dict(graph_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


