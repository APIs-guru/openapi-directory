# TransferOperation

A description of the execution of a transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counters** | [**TransferCounters**](TransferCounters.md) |  | [optional] 
**end_time** | **str** | End time of this transfer execution. | [optional] 
**error_breakdowns** | [**List[ErrorSummary]**](ErrorSummary.md) | Summarizes errors encountered with sample error log entries. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**name** | **str** | A globally unique ID assigned by the system. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**project_id** | **str** | The ID of the Google Cloud project that owns the operation. | [optional] 
**start_time** | **str** | Start time of this transfer execution. | [optional] 
**status** | **str** | Status of the transfer operation. | [optional] 
**transfer_job_name** | **str** | The name of the transfer job that triggers this transfer operation. | [optional] 
**transfer_spec** | [**TransferSpec**](TransferSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_operation import TransferOperation

# TODO update the JSON string below
json = "{}"
# create an instance of TransferOperation from a JSON string
transfer_operation_instance = TransferOperation.from_json(json)
# print the JSON string representation of the object
print(TransferOperation.to_json())

# convert the object into a dict
transfer_operation_dict = transfer_operation_instance.to_dict()
# create an instance of TransferOperation from a dict
transfer_operation_from_dict = TransferOperation.from_dict(transfer_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


