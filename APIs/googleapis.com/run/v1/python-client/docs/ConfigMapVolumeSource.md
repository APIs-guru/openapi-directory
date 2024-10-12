# ConfigMapVolumeSource

Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mode** | **int** | (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a&#x3D;rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u&#x3D;rw,g&#x3D;r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u&#x3D;rwx,g&#x3D;rx,o&#x3D;rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. | [optional] 
**items** | [**List[KeyToPath]**](KeyToPath.md) | (Optional) If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional. | [optional] 
**name** | **str** | Name of the config. | [optional] 
**optional** | **bool** | (Optional) Specify whether the Secret or its keys must be defined. | [optional] 

## Example

```python
from openapi_client.models.config_map_volume_source import ConfigMapVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigMapVolumeSource from a JSON string
config_map_volume_source_instance = ConfigMapVolumeSource.from_json(json)
# print the JSON string representation of the object
print(ConfigMapVolumeSource.to_json())

# convert the object into a dict
config_map_volume_source_dict = config_map_volume_source_instance.to_dict()
# create an instance of ConfigMapVolumeSource from a dict
config_map_volume_source_from_dict = ConfigMapVolumeSource.from_dict(config_map_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


