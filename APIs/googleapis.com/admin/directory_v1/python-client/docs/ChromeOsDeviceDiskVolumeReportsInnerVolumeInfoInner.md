# ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_free** | **str** | Free disk space [in bytes] | [optional] 
**storage_total** | **str** | Total disk space [in bytes] | [optional] 
**volume_id** | **str** | Volume id | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_disk_volume_reports_inner_volume_info_inner import ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner from a JSON string
chrome_os_device_disk_volume_reports_inner_volume_info_inner_instance = ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner.to_json())

# convert the object into a dict
chrome_os_device_disk_volume_reports_inner_volume_info_inner_dict = chrome_os_device_disk_volume_reports_inner_volume_info_inner_instance.to_dict()
# create an instance of ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner from a dict
chrome_os_device_disk_volume_reports_inner_volume_info_inner_from_dict = ChromeOsDeviceDiskVolumeReportsInnerVolumeInfoInner.from_dict(chrome_os_device_disk_volume_reports_inner_volume_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


