# BatchChangeChromeOsDeviceStatusRequest

A request for changing the status of a batch of ChromeOS devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_chrome_os_device_status_action** | **str** | Required. The action to take on the ChromeOS device in order to change its status. | [optional] 
**deprovision_reason** | **str** | Optional. The reason behind a device deprovision. Must be provided if &#39;changeChromeOsDeviceStatusAction&#39; is set to &#39;CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION&#39;. Otherwise, omit this field. | [optional] 
**device_ids** | **List[str]** | Required. List of the IDs of the ChromeOS devices to change. Maximum 50. | [optional] 

## Example

```python
from openapi_client.models.batch_change_chrome_os_device_status_request import BatchChangeChromeOsDeviceStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchChangeChromeOsDeviceStatusRequest from a JSON string
batch_change_chrome_os_device_status_request_instance = BatchChangeChromeOsDeviceStatusRequest.from_json(json)
# print the JSON string representation of the object
print(BatchChangeChromeOsDeviceStatusRequest.to_json())

# convert the object into a dict
batch_change_chrome_os_device_status_request_dict = batch_change_chrome_os_device_status_request_instance.to_dict()
# create an instance of BatchChangeChromeOsDeviceStatusRequest from a dict
batch_change_chrome_os_device_status_request_from_dict = BatchChangeChromeOsDeviceStatusRequest.from_dict(batch_change_chrome_os_device_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


