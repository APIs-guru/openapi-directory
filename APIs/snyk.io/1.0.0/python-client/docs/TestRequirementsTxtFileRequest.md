# TestRequirementsTxtFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestRequirementsTxtFileRequestFiles**](TestRequirementsTxtFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_requirements_txt_file_request import TestRequirementsTxtFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestRequirementsTxtFileRequest from a JSON string
test_requirements_txt_file_request_instance = TestRequirementsTxtFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestRequirementsTxtFileRequest.to_json())

# convert the object into a dict
test_requirements_txt_file_request_dict = test_requirements_txt_file_request_instance.to_dict()
# create an instance of TestRequirementsTxtFileRequest from a dict
test_requirements_txt_file_request_from_dict = TestRequirementsTxtFileRequest.from_dict(test_requirements_txt_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


