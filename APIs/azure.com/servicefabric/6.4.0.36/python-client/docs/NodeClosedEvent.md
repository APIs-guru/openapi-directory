# NodeClosedEvent

Node Closed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Describes error. | 
**node_id** | **str** | Id of Node. | 
**node_instance** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_closed_event import NodeClosedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeClosedEvent from a JSON string
node_closed_event_instance = NodeClosedEvent.from_json(json)
# print the JSON string representation of the object
print(NodeClosedEvent.to_json())

# convert the object into a dict
node_closed_event_dict = node_closed_event_instance.to_dict()
# create an instance of NodeClosedEvent from a dict
node_closed_event_from_dict = NodeClosedEvent.from_dict(node_closed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


