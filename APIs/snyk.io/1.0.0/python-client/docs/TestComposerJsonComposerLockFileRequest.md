# TestComposerJsonComposerLockFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestComposerJsonComposerLockFileRequestFiles**](TestComposerJsonComposerLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_composer_json_composer_lock_file_request import TestComposerJsonComposerLockFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestComposerJsonComposerLockFileRequest from a JSON string
test_composer_json_composer_lock_file_request_instance = TestComposerJsonComposerLockFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestComposerJsonComposerLockFileRequest.to_json())

# convert the object into a dict
test_composer_json_composer_lock_file_request_dict = test_composer_json_composer_lock_file_request_instance.to_dict()
# create an instance of TestComposerJsonComposerLockFileRequest from a dict
test_composer_json_composer_lock_file_request_from_dict = TestComposerJsonComposerLockFileRequest.from_dict(test_composer_json_composer_lock_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


