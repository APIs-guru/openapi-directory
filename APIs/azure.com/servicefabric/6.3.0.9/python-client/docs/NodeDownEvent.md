# NodeDownEvent

Node Down event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_node_up_at** | **datetime** | Time when Node was last up. | 
**node_instance** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_down_event import NodeDownEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDownEvent from a JSON string
node_down_event_instance = NodeDownEvent.from_json(json)
# print the JSON string representation of the object
print(NodeDownEvent.to_json())

# convert the object into a dict
node_down_event_dict = node_down_event_instance.to_dict()
# create an instance of NodeDownEvent from a dict
node_down_event_from_dict = NodeDownEvent.from_dict(node_down_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


