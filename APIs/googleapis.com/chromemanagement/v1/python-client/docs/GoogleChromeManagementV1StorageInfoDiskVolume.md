# GoogleChromeManagementV1StorageInfoDiskVolume

Information for disk volumes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_free_bytes** | **str** | Free storage space in bytes. | [optional] 
**storage_total_bytes** | **str** | Total storage space in bytes. | [optional] 
**volume_id** | **str** | Disk volume id. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_storage_info_disk_volume import GoogleChromeManagementV1StorageInfoDiskVolume

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1StorageInfoDiskVolume from a JSON string
google_chrome_management_v1_storage_info_disk_volume_instance = GoogleChromeManagementV1StorageInfoDiskVolume.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1StorageInfoDiskVolume.to_json())

# convert the object into a dict
google_chrome_management_v1_storage_info_disk_volume_dict = google_chrome_management_v1_storage_info_disk_volume_instance.to_dict()
# create an instance of GoogleChromeManagementV1StorageInfoDiskVolume from a dict
google_chrome_management_v1_storage_info_disk_volume_from_dict = GoogleChromeManagementV1StorageInfoDiskVolume.from_dict(google_chrome_management_v1_storage_info_disk_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


