# GdataContentTypeInfo

Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_guess** | **str** | Scotty&#39;s best guess of what the content type of the file is. | [optional] 
**from_bytes** | **str** | The content type of the file derived by looking at specific bytes (i.e. \&quot;magic bytes\&quot;) of the actual file. | [optional] 
**from_file_name** | **str** | The content type of the file derived from the file extension of the original file name used by the client. | [optional] 
**from_header** | **str** | The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. | [optional] 
**from_url_path** | **str** | The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). | [optional] 

## Example

```python
from openapi_client.models.gdata_content_type_info import GdataContentTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GdataContentTypeInfo from a JSON string
gdata_content_type_info_instance = GdataContentTypeInfo.from_json(json)
# print the JSON string representation of the object
print(GdataContentTypeInfo.to_json())

# convert the object into a dict
gdata_content_type_info_dict = gdata_content_type_info_instance.to_dict()
# create an instance of GdataContentTypeInfo from a dict
gdata_content_type_info_from_dict = GdataContentTypeInfo.from_dict(gdata_content_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


