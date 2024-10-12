# BatchChangeChromeOsDeviceStatusResponse

The response of changing the status of a batch of ChromeOS devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_chrome_os_device_status_results** | [**List[ChangeChromeOsDeviceStatusResult]**](ChangeChromeOsDeviceStatusResult.md) | The results for each of the ChromeOS devices provided in the request. | [optional] 

## Example

```python
from openapi_client.models.batch_change_chrome_os_device_status_response import BatchChangeChromeOsDeviceStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchChangeChromeOsDeviceStatusResponse from a JSON string
batch_change_chrome_os_device_status_response_instance = BatchChangeChromeOsDeviceStatusResponse.from_json(json)
# print the JSON string representation of the object
print(BatchChangeChromeOsDeviceStatusResponse.to_json())

# convert the object into a dict
batch_change_chrome_os_device_status_response_dict = batch_change_chrome_os_device_status_response_instance.to_dict()
# create an instance of BatchChangeChromeOsDeviceStatusResponse from a dict
batch_change_chrome_os_device_status_response_from_dict = BatchChangeChromeOsDeviceStatusResponse.from_dict(batch_change_chrome_os_device_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


