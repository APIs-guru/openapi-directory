# TestGradleFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestGradleFileRequestFiles**](TestGradleFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_gradle_file_request import TestGradleFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestGradleFileRequest from a JSON string
test_gradle_file_request_instance = TestGradleFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestGradleFileRequest.to_json())

# convert the object into a dict
test_gradle_file_request_dict = test_gradle_file_request_instance.to_dict()
# create an instance of TestGradleFileRequest from a dict
test_gradle_file_request_from_dict = TestGradleFileRequest.from_dict(test_gradle_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


