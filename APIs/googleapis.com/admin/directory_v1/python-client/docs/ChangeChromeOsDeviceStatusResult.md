# ChangeChromeOsDeviceStatusResult

The result of a single ChromeOS device for a Change state operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The unique ID of the ChromeOS device. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**response** | **object** | Response for a successful ChromeOS device status change. | [optional] 

## Example

```python
from openapi_client.models.change_chrome_os_device_status_result import ChangeChromeOsDeviceStatusResult

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeChromeOsDeviceStatusResult from a JSON string
change_chrome_os_device_status_result_instance = ChangeChromeOsDeviceStatusResult.from_json(json)
# print the JSON string representation of the object
print(ChangeChromeOsDeviceStatusResult.to_json())

# convert the object into a dict
change_chrome_os_device_status_result_dict = change_chrome_os_device_status_result_instance.to_dict()
# create an instance of ChangeChromeOsDeviceStatusResult from a dict
change_chrome_os_device_status_result_from_dict = ChangeChromeOsDeviceStatusResult.from_dict(change_chrome_os_device_status_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


