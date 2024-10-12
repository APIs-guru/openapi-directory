# TestRequirementsTxtFileRequestFilesTarget

the `requirements.txt` file, encoded according the the \"encoding\" field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | the contents of &#x60;requirements.txt&#x60; as a string, encoded according to &#x60;encoding&#x60; above. | 

## Example

```python
from openapi_client.models.test_requirements_txt_file_request_files_target import TestRequirementsTxtFileRequestFilesTarget

# TODO update the JSON string below
json = "{}"
# create an instance of TestRequirementsTxtFileRequestFilesTarget from a JSON string
test_requirements_txt_file_request_files_target_instance = TestRequirementsTxtFileRequestFilesTarget.from_json(json)
# print the JSON string representation of the object
print(TestRequirementsTxtFileRequestFilesTarget.to_json())

# convert the object into a dict
test_requirements_txt_file_request_files_target_dict = test_requirements_txt_file_request_files_target_instance.to_dict()
# create an instance of TestRequirementsTxtFileRequestFilesTarget from a dict
test_requirements_txt_file_request_files_target_from_dict = TestRequirementsTxtFileRequestFilesTarget.from_dict(test_requirements_txt_file_request_files_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


