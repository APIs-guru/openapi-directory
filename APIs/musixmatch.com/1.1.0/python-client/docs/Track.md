# Track

a song in the Musixmatch database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_coverart_100x100** | **str** |  | [optional] 
**album_coverart_350x350** | **str** |  | [optional] 
**album_coverart_500x500** | **str** |  | [optional] 
**album_coverart_800x800** | **str** |  | [optional] 
**album_id** | **float** |  | [optional] 
**album_name** | **str** |  | [optional] 
**artist_id** | **float** |  | [optional] 
**artist_mbid** | **str** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**commontrack_id** | **float** |  | [optional] 
**commontrack_vanity_id** | **str** |  | [optional] 
**explicit** | **float** |  | [optional] 
**first_release_date** | **str** |  | [optional] 
**has_lyrics** | **float** |  | [optional] 
**has_subtitles** | **float** |  | [optional] 
**instrumental** | **float** |  | [optional] 
**lyrics_id** | **float** |  | [optional] 
**num_favourite** | **float** |  | [optional] 
**primary_genres** | [**AlbumPrimaryGenres**](AlbumPrimaryGenres.md) |  | [optional] 
**restricted** | **float** |  | [optional] 
**secondary_genres** | [**AlbumPrimaryGenres**](AlbumPrimaryGenres.md) |  | [optional] 
**subtitle_id** | **float** |  | [optional] 
**track_edit_url** | **str** |  | [optional] 
**track_id** | **float** |  | [optional] 
**track_isrc** | **str** |  | [optional] 
**track_length** | **float** |  | [optional] 
**track_mbid** | **str** |  | [optional] 
**track_name** | **str** |  | [optional] 
**track_name_translation_list** | **List[str]** |  | [optional] 
**track_rating** | **float** |  | [optional] 
**track_share_url** | **str** |  | [optional] 
**track_soundcloud_id** | **float** |  | [optional] 
**track_spotify_id** | **str** |  | [optional] 
**track_xboxmusic_id** | **str** |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.track import Track

# TODO update the JSON string below
json = "{}"
# create an instance of Track from a JSON string
track_instance = Track.from_json(json)
# print the JSON string representation of the object
print(Track.to_json())

# convert the object into a dict
track_dict = track_instance.to_dict()
# create an instance of Track from a dict
track_from_dict = Track.from_dict(track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


