# NodeDeactivateStartedEvent

Node Deactivate Started event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | Batch Id. | 
**deactivate_intent** | **str** | Describes deactivate intent. | 
**node_instance** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.node_deactivate_started_event import NodeDeactivateStartedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivateStartedEvent from a JSON string
node_deactivate_started_event_instance = NodeDeactivateStartedEvent.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivateStartedEvent.to_json())

# convert the object into a dict
node_deactivate_started_event_dict = node_deactivate_started_event_instance.to_dict()
# create an instance of NodeDeactivateStartedEvent from a dict
node_deactivate_started_event_from_dict = NodeDeactivateStartedEvent.from_dict(node_deactivate_started_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


