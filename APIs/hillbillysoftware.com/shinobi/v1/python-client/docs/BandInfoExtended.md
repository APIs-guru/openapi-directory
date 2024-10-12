# BandInfoExtended


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**albums** | [**List[BandAlbums]**](BandAlbums.md) |  | [optional] 
**artist_id** | **str** |  | [optional] 
**banner** | **str** |  | [optional] 
**biography** | **str** |  | [optional] 
**disbanded_year** | **str** |  | [optional] 
**formation_year** | **str** |  | [optional] 
**genre** | **str** |  | [optional] 
**logo** | **str** |  | [optional] 
**members** | **str** |  | [optional] 
**music_brainz_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**social_media** | **str** |  | [optional] 
**videos** | [**List[MusicVideo]**](MusicVideo.md) |  | [optional] 
**web_site** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.band_info_extended import BandInfoExtended

# TODO update the JSON string below
json = "{}"
# create an instance of BandInfoExtended from a JSON string
band_info_extended_instance = BandInfoExtended.from_json(json)
# print the JSON string representation of the object
print(BandInfoExtended.to_json())

# convert the object into a dict
band_info_extended_dict = band_info_extended_instance.to_dict()
# create an instance of BandInfoExtended from a dict
band_info_extended_from_dict = BandInfoExtended.from_dict(band_info_extended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


