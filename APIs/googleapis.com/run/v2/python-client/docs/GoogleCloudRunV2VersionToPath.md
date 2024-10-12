# GoogleCloudRunV2VersionToPath

VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **int** | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume&#39;s default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a&#x3D;rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u&#x3D;rw,g&#x3D;r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u&#x3D;rwx,g&#x3D;rx,o&#x3D;rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. | [optional] 
**path** | **str** | Required. The relative path of the secret in the container. | [optional] 
**version** | **str** | The Cloud Secret Manager secret version. Can be &#39;latest&#39; for the latest value, or an integer or a secret alias for a specific version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_version_to_path import GoogleCloudRunV2VersionToPath

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2VersionToPath from a JSON string
google_cloud_run_v2_version_to_path_instance = GoogleCloudRunV2VersionToPath.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2VersionToPath.to_json())

# convert the object into a dict
google_cloud_run_v2_version_to_path_dict = google_cloud_run_v2_version_to_path_instance.to_dict()
# create an instance of GoogleCloudRunV2VersionToPath from a dict
google_cloud_run_v2_version_to_path_from_dict = GoogleCloudRunV2VersionToPath.from_dict(google_cloud_run_v2_version_to_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


