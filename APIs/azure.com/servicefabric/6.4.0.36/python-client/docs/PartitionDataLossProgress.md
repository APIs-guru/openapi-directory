# PartitionDataLossProgress

Information about a partition data loss user-induced operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoke_data_loss_result** | [**InvokeDataLossResult**](InvokeDataLossResult.md) |  | [optional] 
**state** | [**OperationState**](OperationState.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_data_loss_progress import PartitionDataLossProgress

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionDataLossProgress from a JSON string
partition_data_loss_progress_instance = PartitionDataLossProgress.from_json(json)
# print the JSON string representation of the object
print(PartitionDataLossProgress.to_json())

# convert the object into a dict
partition_data_loss_progress_dict = partition_data_loss_progress_instance.to_dict()
# create an instance of PartitionDataLossProgress from a dict
partition_data_loss_progress_from_dict = PartitionDataLossProgress.from_dict(partition_data_loss_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


