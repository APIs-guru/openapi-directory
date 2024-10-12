# FileUploadAnswer

Info for a single file submitted to a file upload question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | Output only. The ID of the Google Drive file. | [optional] [readonly] 
**file_name** | **str** | Output only. The file name, as stored in Google Drive on upload. | [optional] [readonly] 
**mime_type** | **str** | Output only. The MIME type of the file, as stored in Google Drive on upload. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_upload_answer import FileUploadAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadAnswer from a JSON string
file_upload_answer_instance = FileUploadAnswer.from_json(json)
# print the JSON string representation of the object
print(FileUploadAnswer.to_json())

# convert the object into a dict
file_upload_answer_dict = file_upload_answer_instance.to_dict()
# create an instance of FileUploadAnswer from a dict
file_upload_answer_from_dict = FileUploadAnswer.from_dict(file_upload_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


