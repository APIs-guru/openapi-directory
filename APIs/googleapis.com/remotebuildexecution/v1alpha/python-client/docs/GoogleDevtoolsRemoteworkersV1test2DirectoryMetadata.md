# GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata

The metadata for a directory. Similar to the equivalent message in the Remote Execution API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | [**GoogleDevtoolsRemoteworkersV1test2Digest**](GoogleDevtoolsRemoteworkersV1test2Digest.md) |  | [optional] 
**path** | **str** | The path of the directory, as in FileMetadata.path. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_directory_metadata import GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata from a JSON string
google_devtools_remoteworkers_v1test2_directory_metadata_instance = GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_directory_metadata_dict = google_devtools_remoteworkers_v1test2_directory_metadata_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata from a dict
google_devtools_remoteworkers_v1test2_directory_metadata_from_dict = GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata.from_dict(google_devtools_remoteworkers_v1test2_directory_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


