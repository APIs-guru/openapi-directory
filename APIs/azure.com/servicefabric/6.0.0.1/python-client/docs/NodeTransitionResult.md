# NodeTransitionResult

Represents information about an operation in a terminal state (Completed or Faulted).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason. | [optional] 
**node_result** | [**NodeResult**](NodeResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_transition_result import NodeTransitionResult

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTransitionResult from a JSON string
node_transition_result_instance = NodeTransitionResult.from_json(json)
# print the JSON string representation of the object
print(NodeTransitionResult.to_json())

# convert the object into a dict
node_transition_result_dict = node_transition_result_instance.to_dict()
# create an instance of NodeTransitionResult from a dict
node_transition_result_from_dict = NodeTransitionResult.from_dict(node_transition_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


