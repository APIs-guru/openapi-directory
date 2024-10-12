# UploadSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** |  | [optional] [readonly] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**parallel_upload_supported** | **bool** | Indicates if parts of the file can uploaded in parallel. | [optional] [readonly] 
**part_size** | **float** | Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful. | [optional] [readonly] 
**success** | **bool** | Indicates if the upload session was completed successfully. | [optional] [readonly] 
**uploaded_byte_range** | **str** | The range of bytes that was successfully uploaded. | [optional] [readonly] 

## Example

```python
from openapi_client.models.upload_session import UploadSession

# TODO update the JSON string below
json = "{}"
# create an instance of UploadSession from a JSON string
upload_session_instance = UploadSession.from_json(json)
# print the JSON string representation of the object
print(UploadSession.to_json())

# convert the object into a dict
upload_session_dict = upload_session_instance.to_dict()
# create an instance of UploadSession from a dict
upload_session_from_dict = UploadSession.from_dict(upload_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


