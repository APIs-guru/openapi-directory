# TestPackageJsonPackageLockJsonFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestPackageJsonPackageLockJsonFileRequestFiles**](TestPackageJsonPackageLockJsonFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_package_json_package_lock_json_file_request import TestPackageJsonPackageLockJsonFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestPackageJsonPackageLockJsonFileRequest from a JSON string
test_package_json_package_lock_json_file_request_instance = TestPackageJsonPackageLockJsonFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestPackageJsonPackageLockJsonFileRequest.to_json())

# convert the object into a dict
test_package_json_package_lock_json_file_request_dict = test_package_json_package_lock_json_file_request_instance.to_dict()
# create an instance of TestPackageJsonPackageLockJsonFileRequest from a dict
test_package_json_package_lock_json_file_request_from_dict = TestPackageJsonPackageLockJsonFileRequest.from_dict(test_package_json_package_lock_json_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


