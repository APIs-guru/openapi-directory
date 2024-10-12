# OperationBatchStatusResponse

Status Details of the long running operation for an environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[OperationBatchStatusResponseItem]**](OperationBatchStatusResponseItem.md) | Gets a collection of items that contain the operation url and status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_batch_status_response import OperationBatchStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationBatchStatusResponse from a JSON string
operation_batch_status_response_instance = OperationBatchStatusResponse.from_json(json)
# print the JSON string representation of the object
print(OperationBatchStatusResponse.to_json())

# convert the object into a dict
operation_batch_status_response_dict = operation_batch_status_response_instance.to_dict()
# create an instance of OperationBatchStatusResponse from a dict
operation_batch_status_response_from_dict = OperationBatchStatusResponse.from_dict(operation_batch_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


