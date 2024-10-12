# AlbumPrimaryGenres


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**music_genre_list** | [**List[AlbumPrimaryGenresMusicGenreListInner]**](AlbumPrimaryGenresMusicGenreListInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.album_primary_genres import AlbumPrimaryGenres

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumPrimaryGenres from a JSON string
album_primary_genres_instance = AlbumPrimaryGenres.from_json(json)
# print the JSON string representation of the object
print(AlbumPrimaryGenres.to_json())

# convert the object into a dict
album_primary_genres_dict = album_primary_genres_instance.to_dict()
# create an instance of AlbumPrimaryGenres from a dict
album_primary_genres_from_dict = AlbumPrimaryGenres.from_dict(album_primary_genres_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


