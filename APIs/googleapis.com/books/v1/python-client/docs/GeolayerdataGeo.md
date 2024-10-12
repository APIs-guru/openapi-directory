# GeolayerdataGeo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boundary** | **List[str]** | The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates. | [optional] 
**cache_policy** | **str** | The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER | [optional] 
**country_code** | **str** | The country code of the location. | [optional] 
**latitude** | **float** | The latitude of the location. | [optional] 
**longitude** | **float** | The longitude of the location. | [optional] 
**map_type** | **str** | The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN | [optional] 
**viewport** | [**GeolayerdataGeoViewport**](GeolayerdataGeoViewport.md) |  | [optional] 
**zoom** | **int** | The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https: //developers.google.com/maps/documentation/staticmaps/#Zoomlevels | [optional] 

## Example

```python
from openapi_client.models.geolayerdata_geo import GeolayerdataGeo

# TODO update the JSON string below
json = "{}"
# create an instance of GeolayerdataGeo from a JSON string
geolayerdata_geo_instance = GeolayerdataGeo.from_json(json)
# print the JSON string representation of the object
print(GeolayerdataGeo.to_json())

# convert the object into a dict
geolayerdata_geo_dict = geolayerdata_geo_instance.to_dict()
# create an instance of GeolayerdataGeo from a dict
geolayerdata_geo_from_dict = GeolayerdataGeo.from_dict(geolayerdata_geo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


