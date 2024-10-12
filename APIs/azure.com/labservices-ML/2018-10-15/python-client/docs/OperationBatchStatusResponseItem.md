# OperationBatchStatusResponseItem

Represents the status of an operation that used the batch API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_url** | **str** | status of the long running operation for an environment | [optional] [readonly] 
**status** | **str** | status of the long running operation for an environment | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_batch_status_response_item import OperationBatchStatusResponseItem

# TODO update the JSON string below
json = "{}"
# create an instance of OperationBatchStatusResponseItem from a JSON string
operation_batch_status_response_item_instance = OperationBatchStatusResponseItem.from_json(json)
# print the JSON string representation of the object
print(OperationBatchStatusResponseItem.to_json())

# convert the object into a dict
operation_batch_status_response_item_dict = operation_batch_status_response_item_instance.to_dict()
# create an instance of OperationBatchStatusResponseItem from a dict
operation_batch_status_response_item_from_dict = OperationBatchStatusResponseItem.from_dict(operation_batch_status_response_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


