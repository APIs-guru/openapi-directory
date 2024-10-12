# TestGemfileLockFileRequestFilesTarget

the `Gemfile.lock` file, encoded according the the \"encoding\" field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | the contents of &#x60;Gemfile.lock&#x60; as a string. | 

## Example

```python
from openapi_client.models.test_gemfile_lock_file_request_files_target import TestGemfileLockFileRequestFilesTarget

# TODO update the JSON string below
json = "{}"
# create an instance of TestGemfileLockFileRequestFilesTarget from a JSON string
test_gemfile_lock_file_request_files_target_instance = TestGemfileLockFileRequestFilesTarget.from_json(json)
# print the JSON string representation of the object
print(TestGemfileLockFileRequestFilesTarget.to_json())

# convert the object into a dict
test_gemfile_lock_file_request_files_target_dict = test_gemfile_lock_file_request_files_target_instance.to_dict()
# create an instance of TestGemfileLockFileRequestFilesTarget from a dict
test_gemfile_lock_file_request_files_target_from_dict = TestGemfileLockFileRequestFilesTarget.from_dict(test_gemfile_lock_file_request_files_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


