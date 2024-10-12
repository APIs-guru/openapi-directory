# NodeEvent

Represents the base for all Node Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_name** | **str** | The name of a Service Fabric node. | 

## Example

```python
from openapi_client.models.node_event import NodeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeEvent from a JSON string
node_event_instance = NodeEvent.from_json(json)
# print the JSON string representation of the object
print(NodeEvent.to_json())

# convert the object into a dict
node_event_dict = node_event_instance.to_dict()
# create an instance of NodeEvent from a dict
node_event_from_dict = NodeEvent.from_dict(node_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


