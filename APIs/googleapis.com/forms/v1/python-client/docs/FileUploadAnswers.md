# FileUploadAnswers

All submitted files for a FileUpload question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[FileUploadAnswer]**](FileUploadAnswer.md) | Output only. All submitted files for a FileUpload question. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_upload_answers import FileUploadAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadAnswers from a JSON string
file_upload_answers_instance = FileUploadAnswers.from_json(json)
# print the JSON string representation of the object
print(FileUploadAnswers.to_json())

# convert the object into a dict
file_upload_answers_dict = file_upload_answers_instance.to_dict()
# create an instance of FileUploadAnswers from a dict
file_upload_answers_from_dict = FileUploadAnswers.from_dict(file_upload_answers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


