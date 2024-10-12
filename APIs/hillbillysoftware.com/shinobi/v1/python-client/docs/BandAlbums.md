# BandAlbums


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_art** | **str** |  | [optional] 
**album_id** | **str** |  | [optional] 
**artist_id** | **str** |  | [optional] 
**bibliography** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**releaseyear** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.band_albums import BandAlbums

# TODO update the JSON string below
json = "{}"
# create an instance of BandAlbums from a JSON string
band_albums_instance = BandAlbums.from_json(json)
# print the JSON string representation of the object
print(BandAlbums.to_json())

# convert the object into a dict
band_albums_dict = band_albums_instance.to_dict()
# create an instance of BandAlbums from a dict
band_albums_from_dict = BandAlbums.from_dict(band_albums_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


