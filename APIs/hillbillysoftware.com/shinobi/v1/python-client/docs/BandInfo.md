# BandInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**web_site** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.band_info import BandInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BandInfo from a JSON string
band_info_instance = BandInfo.from_json(json)
# print the JSON string representation of the object
print(BandInfo.to_json())

# convert the object into a dict
band_info_dict = band_info_instance.to_dict()
# create an instance of BandInfo from a dict
band_info_from_dict = BandInfo.from_dict(band_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


