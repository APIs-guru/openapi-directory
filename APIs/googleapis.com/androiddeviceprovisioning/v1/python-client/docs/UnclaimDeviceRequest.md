# UnclaimDeviceRequest

Request message to unclaim a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. The device ID returned by &#x60;ClaimDevice&#x60;. | [optional] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**section_type** | **str** | Required. The section type of the device&#39;s provisioning record. | [optional] 
**vacation_mode_days** | **int** | The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) | [optional] 
**vacation_mode_expire_time** | **str** | The expiration time of the vacation unlock. | [optional] 

## Example

```python
from openapi_client.models.unclaim_device_request import UnclaimDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnclaimDeviceRequest from a JSON string
unclaim_device_request_instance = UnclaimDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(UnclaimDeviceRequest.to_json())

# convert the object into a dict
unclaim_device_request_dict = unclaim_device_request_instance.to_dict()
# create an instance of UnclaimDeviceRequest from a dict
unclaim_device_request_from_dict = UnclaimDeviceRequest.from_dict(unclaim_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


