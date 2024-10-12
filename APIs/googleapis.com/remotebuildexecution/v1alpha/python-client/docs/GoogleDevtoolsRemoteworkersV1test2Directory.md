# GoogleDevtoolsRemoteworkersV1test2Directory

The contents of a directory. Similar to the equivalent message in the Remote Execution API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directories** | [**List[GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata]**](GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata.md) | Any subdirectories | [optional] 
**files** | [**List[GoogleDevtoolsRemoteworkersV1test2FileMetadata]**](GoogleDevtoolsRemoteworkersV1test2FileMetadata.md) | The files in this directory | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_directory import GoogleDevtoolsRemoteworkersV1test2Directory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2Directory from a JSON string
google_devtools_remoteworkers_v1test2_directory_instance = GoogleDevtoolsRemoteworkersV1test2Directory.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2Directory.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_directory_dict = google_devtools_remoteworkers_v1test2_directory_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2Directory from a dict
google_devtools_remoteworkers_v1test2_directory_from_dict = GoogleDevtoolsRemoteworkersV1test2Directory.from_dict(google_devtools_remoteworkers_v1test2_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


