# KeyToPath

Maps a string key to a path within a volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The Cloud Secret Manager secret version. Can be &#39;latest&#39; for the latest value, or an integer or a secret alias for a specific version. The key to project. | [optional] 
**mode** | **int** | (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume&#39;s default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a&#x3D;rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u&#x3D;rw,g&#x3D;r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u&#x3D;rwx,g&#x3D;rx,o&#x3D;rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. | [optional] 
**path** | **str** | The relative path of the file to map the key to. May not be an absolute path. May not contain the path element &#39;..&#39;. May not start with the string &#39;..&#39;. | [optional] 

## Example

```python
from openapi_client.models.key_to_path import KeyToPath

# TODO update the JSON string below
json = "{}"
# create an instance of KeyToPath from a JSON string
key_to_path_instance = KeyToPath.from_json(json)
# print the JSON string representation of the object
print(KeyToPath.to_json())

# convert the object into a dict
key_to_path_dict = key_to_path_instance.to_dict()
# create an instance of KeyToPath from a dict
key_to_path_from_dict = KeyToPath.from_dict(key_to_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


