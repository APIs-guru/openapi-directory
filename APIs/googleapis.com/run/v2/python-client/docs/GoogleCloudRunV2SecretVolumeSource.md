# GoogleCloudRunV2SecretVolumeSource

The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mode** | **int** | Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a&#x3D;rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u&#x3D;rw,g&#x3D;r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u&#x3D;rwx,g&#x3D;rx,o&#x3D;rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set. | [optional] 
**items** | [**List[GoogleCloudRunV2VersionToPath]**](GoogleCloudRunV2VersionToPath.md) | If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version. | [optional] 
**secret** | **str** | Required. The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_secret_volume_source import GoogleCloudRunV2SecretVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2SecretVolumeSource from a JSON string
google_cloud_run_v2_secret_volume_source_instance = GoogleCloudRunV2SecretVolumeSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2SecretVolumeSource.to_json())

# convert the object into a dict
google_cloud_run_v2_secret_volume_source_dict = google_cloud_run_v2_secret_volume_source_instance.to_dict()
# create an instance of GoogleCloudRunV2SecretVolumeSource from a dict
google_cloud_run_v2_secret_volume_source_from_dict = GoogleCloudRunV2SecretVolumeSource.from_dict(google_cloud_run_v2_secret_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


