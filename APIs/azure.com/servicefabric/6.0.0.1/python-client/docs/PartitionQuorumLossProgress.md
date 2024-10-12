# PartitionQuorumLossProgress

Information about a partition quorum loss user-induced operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoke_quorum_loss_result** | [**InvokeQuorumLossResult**](InvokeQuorumLossResult.md) |  | [optional] 
**state** | [**OperationState**](OperationState.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_quorum_loss_progress import PartitionQuorumLossProgress

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionQuorumLossProgress from a JSON string
partition_quorum_loss_progress_instance = PartitionQuorumLossProgress.from_json(json)
# print the JSON string representation of the object
print(PartitionQuorumLossProgress.to_json())

# convert the object into a dict
partition_quorum_loss_progress_dict = partition_quorum_loss_progress_instance.to_dict()
# create an instance of PartitionQuorumLossProgress from a dict
partition_quorum_loss_progress_from_dict = PartitionQuorumLossProgress.from_dict(partition_quorum_loss_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


