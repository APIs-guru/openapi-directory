# ChromeOsDeviceActiveTimeRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_time** | **int** | Duration of usage in milliseconds. | [optional] 
**var_date** | **date** | Date of usage | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_active_time_ranges_inner import ChromeOsDeviceActiveTimeRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceActiveTimeRangesInner from a JSON string
chrome_os_device_active_time_ranges_inner_instance = ChromeOsDeviceActiveTimeRangesInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceActiveTimeRangesInner.to_json())

# convert the object into a dict
chrome_os_device_active_time_ranges_inner_dict = chrome_os_device_active_time_ranges_inner_instance.to_dict()
# create an instance of ChromeOsDeviceActiveTimeRangesInner from a dict
chrome_os_device_active_time_ranges_inner_from_dict = ChromeOsDeviceActiveTimeRangesInner.from_dict(chrome_os_device_active_time_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


