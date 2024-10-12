# FileInfo

Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | The MIME type of the file.Defaults to the value from Google Cloud Storage. | [optional] 
**sha1_sum** | **str** | The SHA1 hash of the file, in hex. | [optional] 
**source_url** | **str** | URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form &#39;http(s)://storage.googleapis.com//&#39;. | [optional] 

## Example

```python
from openapi_client.models.file_info import FileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileInfo from a JSON string
file_info_instance = FileInfo.from_json(json)
# print the JSON string representation of the object
print(FileInfo.to_json())

# convert the object into a dict
file_info_dict = file_info_instance.to_dict()
# create an instance of FileInfo from a dict
file_info_from_dict = FileInfo.from_dict(file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


