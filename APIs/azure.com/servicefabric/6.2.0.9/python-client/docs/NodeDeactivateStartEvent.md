# NodeDeactivateStartEvent

Node Deactivate Start event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | Batch Id. | 
**deactivate_intent** | **str** | Describes deactivate intent. | 
**node_instance** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_deactivate_start_event import NodeDeactivateStartEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivateStartEvent from a JSON string
node_deactivate_start_event_instance = NodeDeactivateStartEvent.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivateStartEvent.to_json())

# convert the object into a dict
node_deactivate_start_event_dict = node_deactivate_start_event_instance.to_dict()
# create an instance of NodeDeactivateStartEvent from a dict
node_deactivate_start_event_from_dict = NodeDeactivateStartEvent.from_dict(node_deactivate_start_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


