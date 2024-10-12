# Album

a album of songs in the Musixmatch database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_copyright** | **str** |  | [optional] 
**album_coverart_100x100** | **str** |  | [optional] 
**album_coverart_350x350** | **str** |  | [optional] 
**album_coverart_500x500** | **str** |  | [optional] 
**album_coverart_800x800** | **str** |  | [optional] 
**album_edit_url** | **str** |  | [optional] 
**album_id** | **float** |  | [optional] 
**album_label** | **str** |  | [optional] 
**album_mbid** | **str** |  | [optional] 
**album_name** | **str** |  | [optional] 
**album_pline** | **str** |  | [optional] 
**album_rating** | **float** |  | [optional] 
**album_release_date** | **str** |  | [optional] 
**album_release_type** | **str** |  | [optional] 
**album_track_count** | **float** |  | [optional] 
**album_vanity_id** | **str** |  | [optional] 
**artist_id** | **float** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**primary_genres** | [**AlbumPrimaryGenres**](AlbumPrimaryGenres.md) |  | [optional] 
**restricted** | **float** |  | [optional] 
**secondary_genres** | [**AlbumSecondaryGenres**](AlbumSecondaryGenres.md) |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.album import Album

# TODO update the JSON string below
json = "{}"
# create an instance of Album from a JSON string
album_instance = Album.from_json(json)
# print the JSON string representation of the object
print(Album.to_json())

# convert the object into a dict
album_dict = album_instance.to_dict()
# create an instance of Album from a dict
album_from_dict = Album.from_dict(album_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


