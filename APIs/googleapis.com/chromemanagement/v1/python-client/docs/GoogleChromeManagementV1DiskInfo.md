# GoogleChromeManagementV1DiskInfo

Status of the single storage device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_read_this_session** | **str** | Output only. Number of bytes read since last boot. | [optional] [readonly] 
**bytes_written_this_session** | **str** | Output only. Number of bytes written since last boot. | [optional] [readonly] 
**discard_time_this_session** | **str** | Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+. | [optional] [readonly] 
**health** | **str** | Output only. Disk health. | [optional] [readonly] 
**io_time_this_session** | **str** | Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times. | [optional] [readonly] 
**manufacturer** | **str** | Output only. Disk manufacturer. | [optional] [readonly] 
**model** | **str** | Output only. Disk model. | [optional] [readonly] 
**read_time_this_session** | **str** | Output only. Time spent reading from disk since last boot. | [optional] [readonly] 
**serial_number** | **str** | Output only. Disk serial number. | [optional] [readonly] 
**size_bytes** | **str** | Output only. Disk size. | [optional] [readonly] 
**type** | **str** | Output only. Disk type: eMMC / NVMe / ATA / SCSI. | [optional] [readonly] 
**volume_ids** | **List[str]** | Output only. Disk volumes. | [optional] [readonly] 
**write_time_this_session** | **str** | Output only. Time spent writing to disk since last boot. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_disk_info import GoogleChromeManagementV1DiskInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DiskInfo from a JSON string
google_chrome_management_v1_disk_info_instance = GoogleChromeManagementV1DiskInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DiskInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_disk_info_dict = google_chrome_management_v1_disk_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1DiskInfo from a dict
google_chrome_management_v1_disk_info_from_dict = GoogleChromeManagementV1DiskInfo.from_dict(google_chrome_management_v1_disk_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


