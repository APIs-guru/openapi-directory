# PlaylistImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifies this resource (playlist id and image type). | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#playlistImages\&quot;. | [optional] [default to 'youtube#playlistImage']
**snippet** | [**PlaylistImageSnippet**](PlaylistImageSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.playlist_image import PlaylistImage

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistImage from a JSON string
playlist_image_instance = PlaylistImage.from_json(json)
# print the JSON string representation of the object
print(PlaylistImage.to_json())

# convert the object into a dict
playlist_image_dict = playlist_image_instance.to_dict()
# create an instance of PlaylistImage from a dict
playlist_image_from_dict = PlaylistImage.from_dict(playlist_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


