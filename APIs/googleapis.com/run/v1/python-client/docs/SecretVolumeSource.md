# SecretVolumeSource

A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mode** | **int** | Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a&#x3D;rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u&#x3D;rw,g&#x3D;r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u&#x3D;rwx,g&#x3D;rx,o&#x3D;rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. | [optional] 
**items** | [**List[KeyToPath]**](KeyToPath.md) | A list of secret versions to mount in the volume. If no items are specified, the volume will expose a file with the same name as the secret name. The contents of the file will be the data in the latest version of the secret. If items are specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify both a key and a path. | [optional] 
**optional** | **bool** | Not supported by Cloud Run. | [optional] 
**secret_name** | **str** | The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container&#39;s namespace to use. | [optional] 

## Example

```python
from openapi_client.models.secret_volume_source import SecretVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of SecretVolumeSource from a JSON string
secret_volume_source_instance = SecretVolumeSource.from_json(json)
# print the JSON string representation of the object
print(SecretVolumeSource.to_json())

# convert the object into a dict
secret_volume_source_dict = secret_volume_source_instance.to_dict()
# create an instance of SecretVolumeSource from a dict
secret_volume_source_from_dict = SecretVolumeSource.from_dict(secret_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


