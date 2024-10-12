# TestGopkgTomlGopkgLockFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestGopkgTomlGopkgLockFileRequestFiles**](TestGopkgTomlGopkgLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_gopkg_toml_gopkg_lock_file_request import TestGopkgTomlGopkgLockFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestGopkgTomlGopkgLockFileRequest from a JSON string
test_gopkg_toml_gopkg_lock_file_request_instance = TestGopkgTomlGopkgLockFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestGopkgTomlGopkgLockFileRequest.to_json())

# convert the object into a dict
test_gopkg_toml_gopkg_lock_file_request_dict = test_gopkg_toml_gopkg_lock_file_request_instance.to_dict()
# create an instance of TestGopkgTomlGopkgLockFileRequest from a dict
test_gopkg_toml_gopkg_lock_file_request_from_dict = TestGopkgTomlGopkgLockFileRequest.from_dict(test_gopkg_toml_gopkg_lock_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


