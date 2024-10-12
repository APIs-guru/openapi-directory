# File

File information about the related binary/library used by an executable, or the script used by a script interpreter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | Prefix of the file contents as a JSON-encoded string. | [optional] 
**disk_path** | [**DiskPath**](DiskPath.md) |  | [optional] 
**hashed_size** | **str** | The length in bytes of the file prefix that was hashed. If hashed_size &#x3D;&#x3D; size, any hashes reported represent the entire file. | [optional] 
**partially_hashed** | **bool** | True when the hash covers only a prefix of the file. | [optional] 
**path** | **str** | Absolute path of the file as a JSON encoded string. | [optional] 
**sha256** | **str** | SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size &#x3D;&#x3D; size, sha256 represents the SHA256 hash of the entire file. | [optional] 
**size** | **str** | Size of the file in bytes. | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


