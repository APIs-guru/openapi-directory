# UploadSession

Information about a image store upload session

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_sessions** | [**List[UploadSessionInfo]**](UploadSessionInfo.md) | When querying upload session by upload session ID, the result contains only one upload session. When querying upload session by image store relative path, the result might contain multiple upload sessions. | [optional] 

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


