# NodeDeactivateCompleteEvent

Node Deactivate Complete event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_ids_with_deactivate_intent** | **str** | Batch Ids. | 
**effective_deactivate_intent** | **str** | Describes deactivate intent. | 
**node_instance** | **int** | Id of Node instance. | 
**start_time** | **datetime** | Start time. | 

## Example

```python
from openapi_client.models.node_deactivate_complete_event import NodeDeactivateCompleteEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivateCompleteEvent from a JSON string
node_deactivate_complete_event_instance = NodeDeactivateCompleteEvent.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivateCompleteEvent.to_json())

# convert the object into a dict
node_deactivate_complete_event_dict = node_deactivate_complete_event_instance.to_dict()
# create an instance of NodeDeactivateCompleteEvent from a dict
node_deactivate_complete_event_from_dict = NodeDeactivateCompleteEvent.from_dict(node_deactivate_complete_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


