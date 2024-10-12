# Artist

a artist in the Musixmatch database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artist_alias_list** | [**List[ArtistArtistAliasListInner]**](ArtistArtistAliasListInner.md) |  | [optional] 
**artist_comment** | **str** |  | [optional] 
**artist_country** | **str** |  | [optional] 
**artist_credits** | [**ArtistArtistCredits**](ArtistArtistCredits.md) |  | [optional] 
**artist_edit_url** | **str** |  | [optional] 
**artist_id** | **float** |  | [optional] 
**artist_mbid** | **str** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**artist_name_translation_list** | [**List[ArtistArtistNameTranslationListInner]**](ArtistArtistNameTranslationListInner.md) |  | [optional] 
**artist_rating** | **float** |  | [optional] 
**artist_share_url** | **str** |  | [optional] 
**artist_twitter_url** | **str** |  | [optional] 
**artist_vanity_id** | **str** |  | [optional] 
**managed** | **float** |  | [optional] 
**primary_genres** | [**AlbumPrimaryGenres**](AlbumPrimaryGenres.md) |  | [optional] 
**restricted** | **float** |  | [optional] 
**secondary_genres** | [**AlbumSecondaryGenres**](AlbumSecondaryGenres.md) |  | [optional] 
**updated_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artist import Artist

# TODO update the JSON string below
json = "{}"
# create an instance of Artist from a JSON string
artist_instance = Artist.from_json(json)
# print the JSON string representation of the object
print(Artist.to_json())

# convert the object into a dict
artist_dict = artist_instance.to_dict()
# create an instance of Artist from a dict
artist_from_dict = Artist.from_dict(artist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


