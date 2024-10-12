# DevicesLongRunningOperationResponse

Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_device_status** | [**List[OperationPerDevice]**](OperationPerDevice.md) | The processing status for each device in the operation. One &#x60;PerDeviceStatus&#x60; per device. The list order matches the items in the original request. | [optional] 
**success_count** | **int** | A summary of how many items in the operation the server processed successfully. Updated as the operation progresses. | [optional] 

## Example

```python
from openapi_client.models.devices_long_running_operation_response import DevicesLongRunningOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesLongRunningOperationResponse from a JSON string
devices_long_running_operation_response_instance = DevicesLongRunningOperationResponse.from_json(json)
# print the JSON string representation of the object
print(DevicesLongRunningOperationResponse.to_json())

# convert the object into a dict
devices_long_running_operation_response_dict = devices_long_running_operation_response_instance.to_dict()
# create an instance of DevicesLongRunningOperationResponse from a dict
devices_long_running_operation_response_from_dict = DevicesLongRunningOperationResponse.from_dict(devices_long_running_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


