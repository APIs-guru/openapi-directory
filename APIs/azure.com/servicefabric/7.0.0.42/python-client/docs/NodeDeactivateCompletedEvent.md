# NodeDeactivateCompletedEvent

Node Deactivate Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_ids_with_deactivate_intent** | **str** | Batch Ids. | 
**effective_deactivate_intent** | **str** | Describes deactivate intent. | 
**node_instance** | **int** | Id of Node instance. | 
**start_time** | **datetime** | Start time. | 

## Example

```python
from openapi_client.models.node_deactivate_completed_event import NodeDeactivateCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivateCompletedEvent from a JSON string
node_deactivate_completed_event_instance = NodeDeactivateCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivateCompletedEvent.to_json())

# convert the object into a dict
node_deactivate_completed_event_dict = node_deactivate_completed_event_instance.to_dict()
# create an instance of NodeDeactivateCompletedEvent from a dict
node_deactivate_completed_event_from_dict = NodeDeactivateCompletedEvent.from_dict(node_deactivate_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


