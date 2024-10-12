# CreateUploadSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_id** | **str** | ID of the drive to upload to. | [optional] 
**name** | **str** | The name of the file. | 
**parent_folder_id** | **str** | The parent folder to create the new file within. | 
**size** | **int** | The size of the file in bytes | 

## Example

```python
from openapi_client.models.create_upload_session_request import CreateUploadSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUploadSessionRequest from a JSON string
create_upload_session_request_instance = CreateUploadSessionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUploadSessionRequest.to_json())

# convert the object into a dict
create_upload_session_request_dict = create_upload_session_request_instance.to_dict()
# create an instance of CreateUploadSessionRequest from a dict
create_upload_session_request_from_dict = CreateUploadSessionRequest.from_dict(create_upload_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


