# GoogleDevtoolsRemoteworkersV1test2FileMetadata

The metadata for a file. Similar to the equivalent message in the Remote Execution API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | If the file is small enough, its contents may also or alternatively be listed here. | [optional] 
**digest** | [**GoogleDevtoolsRemoteworkersV1test2Digest**](GoogleDevtoolsRemoteworkersV1test2Digest.md) |  | [optional] 
**is_executable** | **bool** | Properties of the file | [optional] 
**path** | **str** | The path of this file. If this message is part of the CommandOutputs.outputs fields, the path is relative to the execution root and must correspond to an entry in CommandTask.outputs.files. If this message is part of a Directory message, then the path is relative to the root of that directory. All paths MUST be delimited by forward slashes. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_file_metadata import GoogleDevtoolsRemoteworkersV1test2FileMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2FileMetadata from a JSON string
google_devtools_remoteworkers_v1test2_file_metadata_instance = GoogleDevtoolsRemoteworkersV1test2FileMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2FileMetadata.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_file_metadata_dict = google_devtools_remoteworkers_v1test2_file_metadata_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2FileMetadata from a dict
google_devtools_remoteworkers_v1test2_file_metadata_from_dict = GoogleDevtoolsRemoteworkersV1test2FileMetadata.from_dict(google_devtools_remoteworkers_v1test2_file_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


