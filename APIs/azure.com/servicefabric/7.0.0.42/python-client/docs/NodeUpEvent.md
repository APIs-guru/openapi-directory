# NodeUpEvent

Node Up event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_node_down_at** | **datetime** | Time when Node was last down. | 
**node_instance** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_up_event import NodeUpEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeUpEvent from a JSON string
node_up_event_instance = NodeUpEvent.from_json(json)
# print the JSON string representation of the object
print(NodeUpEvent.to_json())

# convert the object into a dict
node_up_event_dict = node_up_event_instance.to_dict()
# create an instance of NodeUpEvent from a dict
node_up_event_from_dict = NodeUpEvent.from_dict(node_up_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


