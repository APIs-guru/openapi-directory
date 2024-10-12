# FileUploadQuestion

A file upload question. The API currently does not support creating file upload questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_id** | **str** | Required. The ID of the Drive folder where uploaded files are stored. | [optional] 
**max_file_size** | **str** | Maximum number of bytes allowed for any single file uploaded to this question. | [optional] 
**max_files** | **int** | Maximum number of files that can be uploaded for this question in a single response. | [optional] 
**types** | **List[str]** | File types accepted by this question. | [optional] 

## Example

```python
from openapi_client.models.file_upload_question import FileUploadQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadQuestion from a JSON string
file_upload_question_instance = FileUploadQuestion.from_json(json)
# print the JSON string representation of the object
print(FileUploadQuestion.to_json())

# convert the object into a dict
file_upload_question_dict = file_upload_question_instance.to_dict()
# create an instance of FileUploadQuestion from a dict
file_upload_question_from_dict = FileUploadQuestion.from_dict(file_upload_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


