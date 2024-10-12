# GoogleCloudSecuritycenterV2DiskPath

Path of the file in terms of underlying disk/partition identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_uuid** | **str** | UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) | [optional] 
**relative_path** | **str** | Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_disk_path import GoogleCloudSecuritycenterV2DiskPath

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2DiskPath from a JSON string
google_cloud_securitycenter_v2_disk_path_instance = GoogleCloudSecuritycenterV2DiskPath.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2DiskPath.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_disk_path_dict = google_cloud_securitycenter_v2_disk_path_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2DiskPath from a dict
google_cloud_securitycenter_v2_disk_path_from_dict = GoogleCloudSecuritycenterV2DiskPath.from_dict(google_cloud_securitycenter_v2_disk_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


