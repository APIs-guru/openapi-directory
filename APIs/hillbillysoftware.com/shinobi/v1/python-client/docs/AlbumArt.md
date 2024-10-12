# AlbumArt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**albumname** | **str** |  | [optional] 
**art** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.album_art import AlbumArt

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumArt from a JSON string
album_art_instance = AlbumArt.from_json(json)
# print the JSON string representation of the object
print(AlbumArt.to_json())

# convert the object into a dict
album_art_dict = album_art_instance.to_dict()
# create an instance of AlbumArt from a dict
album_art_from_dict = AlbumArt.from_dict(album_art_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


