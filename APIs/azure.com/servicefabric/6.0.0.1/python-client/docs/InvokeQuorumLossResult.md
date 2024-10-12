# InvokeQuorumLossResult

Represents information about an operation in a terminal state (Completed or Faulted).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | If OperationState is Completed, this is 0.  If OperationState is Faulted, this is an error code indicating the reason. | [optional] 
**selected_partition** | [**SelectedPartition**](SelectedPartition.md) |  | [optional] 

## Example

```python
from openapi_client.models.invoke_quorum_loss_result import InvokeQuorumLossResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvokeQuorumLossResult from a JSON string
invoke_quorum_loss_result_instance = InvokeQuorumLossResult.from_json(json)
# print the JSON string representation of the object
print(InvokeQuorumLossResult.to_json())

# convert the object into a dict
invoke_quorum_loss_result_dict = invoke_quorum_loss_result_instance.to_dict()
# create an instance of InvokeQuorumLossResult from a dict
invoke_quorum_loss_result_from_dict = InvokeQuorumLossResult.from_dict(invoke_quorum_loss_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


