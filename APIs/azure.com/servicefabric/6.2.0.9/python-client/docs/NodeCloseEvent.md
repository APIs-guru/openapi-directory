# NodeCloseEvent

Node Close event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Describes error. | 
**node_id** | **str** | Id of Node. | 
**node_instance** | **str** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_close_event import NodeCloseEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeCloseEvent from a JSON string
node_close_event_instance = NodeCloseEvent.from_json(json)
# print the JSON string representation of the object
print(NodeCloseEvent.to_json())

# convert the object into a dict
node_close_event_dict = node_close_event_instance.to_dict()
# create an instance of NodeCloseEvent from a dict
node_close_event_from_dict = NodeCloseEvent.from_dict(node_close_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


