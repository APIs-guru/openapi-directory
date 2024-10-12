# PlaceDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ambience** | [**List[FeatureReference]**](FeatureReference.md) | expected mood and feel of the event | [optional] 
**category** | [**List[FeatureReference]**](FeatureReference.md) | Associated PlaceCategory. May be multiple (Tier 1) | [optional] 
**contact** | [**ContactDetail**](ContactDetail.md) |  | [optional] 
**function** | [**List[FeatureReference]**](FeatureReference.md) | PlaceFunction. (Tier 2 taxonomy) | [optional] 
**opening_hours** | [**List[Timeframe]**](Timeframe.md) |  | [optional] 
**photo** | [**List[ImageMeta]**](ImageMeta.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** | Type of place where Place is a physical address, LocalBusiness is any type of comercial property, AdministrativeArea is a political or colloquial area, and Virtual is out of this world | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**geo** | [**GeoPt**](GeoPt.md) |  | [optional] 
**geometry** | **object** | Shape defined per GeoJSON spec | [optional] 
**location** | [**VirtualLocation**](VirtualLocation.md) |  | [optional] 
**logo** | [**ImageMeta**](ImageMeta.md) |  | [optional] 
**name** | **str** |  | [optional] 
**tag** | [**List[FeatureReference]**](FeatureReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.place_detail import PlaceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceDetail from a JSON string
place_detail_instance = PlaceDetail.from_json(json)
# print the JSON string representation of the object
print(PlaceDetail.to_json())

# convert the object into a dict
place_detail_dict = place_detail_instance.to_dict()
# create an instance of PlaceDetail from a dict
place_detail_from_dict = PlaceDetail.from_dict(place_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


