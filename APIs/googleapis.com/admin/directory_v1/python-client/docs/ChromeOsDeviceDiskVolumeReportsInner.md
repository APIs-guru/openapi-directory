# ChromeOsDeviceDiskVolumeReportsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume_info** | [**List[ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner]**](ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner.md) | Disk volumes | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_disk_volume_reports_inner import ChromeOsDeviceDiskVolumeReportsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceDiskVolumeReportsInner from a JSON string
chrome_os_device_disk_volume_reports_inner_instance = ChromeOsDeviceDiskVolumeReportsInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceDiskVolumeReportsInner.to_json())

# convert the object into a dict
chrome_os_device_disk_volume_reports_inner_dict = chrome_os_device_disk_volume_reports_inner_instance.to_dict()
# create an instance of ChromeOsDeviceDiskVolumeReportsInner from a dict
chrome_os_device_disk_volume_reports_inner_from_dict = ChromeOsDeviceDiskVolumeReportsInner.from_dict(chrome_os_device_disk_volume_reports_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


