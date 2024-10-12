# PerDeviceStatusInBatch

Captures the processing status for each device in the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | If processing succeeds, the device ID of the device. | [optional] 
**error_identifier** | **str** | If processing fails, the error type. | [optional] 
**error_message** | **str** | If processing fails, a developer message explaining what went wrong. | [optional] 
**status** | **str** | The result status of the device after processing. | [optional] 

## Example

```python
from openapi_client.models.per_device_status_in_batch import PerDeviceStatusInBatch

# TODO update the JSON string below
json = "{}"
# create an instance of PerDeviceStatusInBatch from a JSON string
per_device_status_in_batch_instance = PerDeviceStatusInBatch.from_json(json)
# print the JSON string representation of the object
print(PerDeviceStatusInBatch.to_json())

# convert the object into a dict
per_device_status_in_batch_dict = per_device_status_in_batch_instance.to_dict()
# create an instance of PerDeviceStatusInBatch from a dict
per_device_status_in_batch_from_dict = PerDeviceStatusInBatch.from_dict(per_device_status_in_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


