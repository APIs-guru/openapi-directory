# AlbumTracks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_id** | **str** |  | [optional] 
**artist_id** | **str** |  | [optional] 
**length** | **str** |  | [optional] 
**track_name** | **str** |  | [optional] 
**track_no** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.album_tracks import AlbumTracks

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumTracks from a JSON string
album_tracks_instance = AlbumTracks.from_json(json)
# print the JSON string representation of the object
print(AlbumTracks.to_json())

# convert the object into a dict
album_tracks_dict = album_tracks_instance.to_dict()
# create an instance of AlbumTracks from a dict
album_tracks_from_dict = AlbumTracks.from_dict(album_tracks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


