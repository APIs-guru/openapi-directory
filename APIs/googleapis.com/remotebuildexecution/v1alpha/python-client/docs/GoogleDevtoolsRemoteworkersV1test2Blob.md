# GoogleDevtoolsRemoteworkersV1test2Blob

Describes a blob of binary content with its digest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The contents of the blob. | [optional] 
**digest** | [**GoogleDevtoolsRemoteworkersV1test2Digest**](GoogleDevtoolsRemoteworkersV1test2Digest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_blob import GoogleDevtoolsRemoteworkersV1test2Blob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2Blob from a JSON string
google_devtools_remoteworkers_v1test2_blob_instance = GoogleDevtoolsRemoteworkersV1test2Blob.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2Blob.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_blob_dict = google_devtools_remoteworkers_v1test2_blob_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2Blob from a dict
google_devtools_remoteworkers_v1test2_blob_from_dict = GoogleDevtoolsRemoteworkersV1test2Blob.from_dict(google_devtools_remoteworkers_v1test2_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


