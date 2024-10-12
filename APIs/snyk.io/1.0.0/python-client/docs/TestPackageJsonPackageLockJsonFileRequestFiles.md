# TestPackageJsonPackageLockJsonFileRequestFiles

The manifest files:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional** | **List[object]** | a lockfile can be sent (if needed), encoded according the the \&quot;encoding\&quot; field. | [optional] 
**target** | [**TestPackageJsonPackageLockJsonFileRequestFilesTarget**](TestPackageJsonPackageLockJsonFileRequestFilesTarget.md) |  | 

## Example

```python
from openapi_client.models.test_package_json_package_lock_json_file_request_files import TestPackageJsonPackageLockJsonFileRequestFiles

# TODO update the JSON string below
json = "{}"
# create an instance of TestPackageJsonPackageLockJsonFileRequestFiles from a JSON string
test_package_json_package_lock_json_file_request_files_instance = TestPackageJsonPackageLockJsonFileRequestFiles.from_json(json)
# print the JSON string representation of the object
print(TestPackageJsonPackageLockJsonFileRequestFiles.to_json())

# convert the object into a dict
test_package_json_package_lock_json_file_request_files_dict = test_package_json_package_lock_json_file_request_files_instance.to_dict()
# create an instance of TestPackageJsonPackageLockJsonFileRequestFiles from a dict
test_package_json_package_lock_json_file_request_files_from_dict = TestPackageJsonPackageLockJsonFileRequestFiles.from_dict(test_package_json_package_lock_json_file_request_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


