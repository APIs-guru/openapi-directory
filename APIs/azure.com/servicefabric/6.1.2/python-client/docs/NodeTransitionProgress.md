# NodeTransitionProgress

Information about an NodeTransition operation.  This class contains an OperationState and a NodeTransitionResult.  The NodeTransitionResult is not valid until OperationState is Completed or Faulted. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_transition_result** | [**NodeTransitionResult**](NodeTransitionResult.md) |  | [optional] 
**state** | [**OperationState**](OperationState.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_transition_progress import NodeTransitionProgress

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTransitionProgress from a JSON string
node_transition_progress_instance = NodeTransitionProgress.from_json(json)
# print the JSON string representation of the object
print(NodeTransitionProgress.to_json())

# convert the object into a dict
node_transition_progress_dict = node_transition_progress_instance.to_dict()
# create an instance of NodeTransitionProgress from a dict
node_transition_progress_from_dict = NodeTransitionProgress.from_dict(node_transition_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


