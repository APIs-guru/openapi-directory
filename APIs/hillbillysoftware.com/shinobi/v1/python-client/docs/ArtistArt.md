# ArtistArt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artist_id** | **str** |  | [optional] 
**banner** | **str** |  | [optional] 
**logo** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artist_art import ArtistArt

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistArt from a JSON string
artist_art_instance = ArtistArt.from_json(json)
# print the JSON string representation of the object
print(ArtistArt.to_json())

# convert the object into a dict
artist_art_dict = artist_art_instance.to_dict()
# create an instance of ArtistArt from a dict
artist_art_from_dict = ArtistArt.from_dict(artist_art_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


