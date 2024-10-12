# UploadSessionInfo

Information about an image store upload session. A session is associated with a relative path in the image store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_ranges** | [**List[UploadChunkRange]**](UploadChunkRange.md) | List of chunk ranges that image store has not received yet. | [optional] 
**file_size** | **str** | The size in bytes of the uploading file. | [optional] 
**modified_date** | **datetime** | The date and time when the upload session was last modified. | [optional] 
**session_id** | **str** | A unique ID of the upload session. A session ID can be reused only if the session was committed or removed. | [optional] 
**store_relative_path** | **str** | The remote location within image store. This path is relative to the image store root. | [optional] 

## Example

```python
from openapi_client.models.upload_session_info import UploadSessionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UploadSessionInfo from a JSON string
upload_session_info_instance = UploadSessionInfo.from_json(json)
# print the JSON string representation of the object
print(UploadSessionInfo.to_json())

# convert the object into a dict
upload_session_info_dict = upload_session_info_instance.to_dict()
# create an instance of UploadSessionInfo from a dict
upload_session_info_from_dict = UploadSessionInfo.from_dict(upload_session_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


