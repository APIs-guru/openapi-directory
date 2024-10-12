# PosixFilesystem

A POSIX filesystem resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**root_directory** | **str** | Root directory path to the filesystem. | [optional] 

## Example

```python
from openapi_client.models.posix_filesystem import PosixFilesystem

# TODO update the JSON string below
json = "{}"
# create an instance of PosixFilesystem from a JSON string
posix_filesystem_instance = PosixFilesystem.from_json(json)
# print the JSON string representation of the object
print(PosixFilesystem.to_json())

# convert the object into a dict
posix_filesystem_dict = posix_filesystem_instance.to_dict()
# create an instance of PosixFilesystem from a dict
posix_filesystem_from_dict = PosixFilesystem.from_dict(posix_filesystem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


