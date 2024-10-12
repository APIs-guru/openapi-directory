# OperationBatchStatusPayload

Payload to get the status of an operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | **List[str]** | The operation url of long running operation | 

## Example

```python
from openapi_client.models.operation_batch_status_payload import OperationBatchStatusPayload

# TODO update the JSON string below
json = "{}"
# create an instance of OperationBatchStatusPayload from a JSON string
operation_batch_status_payload_instance = OperationBatchStatusPayload.from_json(json)
# print the JSON string representation of the object
print(OperationBatchStatusPayload.to_json())

# convert the object into a dict
operation_batch_status_payload_dict = operation_batch_status_payload_instance.to_dict()
# create an instance of OperationBatchStatusPayload from a dict
operation_batch_status_payload_from_dict = OperationBatchStatusPayload.from_dict(operation_batch_status_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


