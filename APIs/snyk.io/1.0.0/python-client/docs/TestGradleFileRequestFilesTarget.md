# TestGradleFileRequestFilesTarget

the manifest file, encoded according the the \"encoding\" field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the file, encoded according to the &#x60;encoding&#x60; field. | 

## Example

```python
from openapi_client.models.test_gradle_file_request_files_target import TestGradleFileRequestFilesTarget

# TODO update the JSON string below
json = "{}"
# create an instance of TestGradleFileRequestFilesTarget from a JSON string
test_gradle_file_request_files_target_instance = TestGradleFileRequestFilesTarget.from_json(json)
# print the JSON string representation of the object
print(TestGradleFileRequestFilesTarget.to_json())

# convert the object into a dict
test_gradle_file_request_files_target_dict = test_gradle_file_request_files_target_instance.to_dict()
# create an instance of TestGradleFileRequestFilesTarget from a dict
test_gradle_file_request_files_target_from_dict = TestGradleFileRequestFilesTarget.from_dict(test_gradle_file_request_files_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


