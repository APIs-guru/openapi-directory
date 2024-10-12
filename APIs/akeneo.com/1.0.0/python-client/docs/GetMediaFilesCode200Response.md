# GetMediaFilesCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetMediaFilesCode200ResponseAllOfLinks**](GetMediaFilesCode200ResponseAllOfLinks.md) |  | [optional] 
**code** | **str** | Media file code | [optional] 
**extension** | **str** | Extension of the media file | [optional] 
**mime_type** | **str** | Mime type of the media file | [optional] 
**original_filename** | **str** | Original filename of the media file | [optional] 
**size** | **int** | Size of the media file | [optional] 

## Example

```python
from openapi_client.models.get_media_files_code200_response import GetMediaFilesCode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMediaFilesCode200Response from a JSON string
get_media_files_code200_response_instance = GetMediaFilesCode200Response.from_json(json)
# print the JSON string representation of the object
print(GetMediaFilesCode200Response.to_json())

# convert the object into a dict
get_media_files_code200_response_dict = get_media_files_code200_response_instance.to_dict()
# create an instance of GetMediaFilesCode200Response from a dict
get_media_files_code200_response_from_dict = GetMediaFilesCode200Response.from_dict(get_media_files_code200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


