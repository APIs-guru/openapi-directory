# TestGemfileLockFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestGemfileLockFileRequestFiles**](TestGemfileLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_gemfile_lock_file_request import TestGemfileLockFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestGemfileLockFileRequest from a JSON string
test_gemfile_lock_file_request_instance = TestGemfileLockFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestGemfileLockFileRequest.to_json())

# convert the object into a dict
test_gemfile_lock_file_request_dict = test_gemfile_lock_file_request_instance.to_dict()
# create an instance of TestGemfileLockFileRequest from a dict
test_gemfile_lock_file_request_from_dict = TestGemfileLockFileRequest.from_dict(test_gemfile_lock_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


