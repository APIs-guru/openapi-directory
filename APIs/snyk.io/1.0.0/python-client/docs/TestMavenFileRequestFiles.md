# TestMavenFileRequestFiles

The manifest files:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional** | **List[object]** | additional manifest files (if needed), encoded according the the \&quot;encoding\&quot; field. | [optional] 
**target** | [**TestMavenFileRequestFilesTarget**](TestMavenFileRequestFilesTarget.md) |  | 

## Example

```python
from openapi_client.models.test_maven_file_request_files import TestMavenFileRequestFiles

# TODO update the JSON string below
json = "{}"
# create an instance of TestMavenFileRequestFiles from a JSON string
test_maven_file_request_files_instance = TestMavenFileRequestFiles.from_json(json)
# print the JSON string representation of the object
print(TestMavenFileRequestFiles.to_json())

# convert the object into a dict
test_maven_file_request_files_dict = test_maven_file_request_files_instance.to_dict()
# create an instance of TestMavenFileRequestFiles from a dict
test_maven_file_request_files_from_dict = TestMavenFileRequestFiles.from_dict(test_maven_file_request_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


