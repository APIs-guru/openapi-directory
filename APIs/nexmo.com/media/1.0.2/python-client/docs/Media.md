# Media


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of your Nexmo account. This is the same as your API key. | [optional] 
**etag** | **str** | An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag) | [optional] 
**id** | **str** | A UUID representing the object. | [optional] 
**max_downloads_allowed** | **int** | The maximum number of times the file may be downloaded. | [optional] 
**media_size** | **int** | The size of the file in bytes | [optional] 
**metadata_primary** | **str** | A user set string containing metadata about the media file. | [optional] 
**metadata_secondary** | **str** | A user set string containing further metadata about the media file. | [optional] 
**mime_type** | **str** | The IETF MIME type of the file. | [optional] 
**original_file_name** | **str** | The filename of the object as it was originally uploaded. | [optional] 
**public** | **bool** | Whether the item is available for download without authentication. | [optional] 
**store_id** | **str** | An internal identifier of how the file is stored. | [optional] 
**time_created** | **str** | A timestamp for the time that the file was created | [optional] 
**time_last_updated** | **str** | A timestamp for the time that the file was last modified | [optional] 
**times_downloaded** | **int** | The number of times the file has been downloaded. | [optional] 

## Example

```python
from openapi_client.models.media import Media

# TODO update the JSON string below
json = "{}"
# create an instance of Media from a JSON string
media_instance = Media.from_json(json)
# print the JSON string representation of the object
print(Media.to_json())

# convert the object into a dict
media_dict = media_instance.to_dict()
# create an instance of Media from a dict
media_from_dict = Media.from_dict(media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


