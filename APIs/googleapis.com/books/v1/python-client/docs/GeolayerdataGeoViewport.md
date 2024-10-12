# GeolayerdataGeoViewport

The viewport for showing this location. This is a latitude, longitude rectangle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hi** | [**GeolayerdataGeoViewportHi**](GeolayerdataGeoViewportHi.md) |  | [optional] 
**lo** | [**GeolayerdataGeoViewportHi**](GeolayerdataGeoViewportHi.md) |  | [optional] 

## Example

```python
from openapi_client.models.geolayerdata_geo_viewport import GeolayerdataGeoViewport

# TODO update the JSON string below
json = "{}"
# create an instance of GeolayerdataGeoViewport from a JSON string
geolayerdata_geo_viewport_instance = GeolayerdataGeoViewport.from_json(json)
# print the JSON string representation of the object
print(GeolayerdataGeoViewport.to_json())

# convert the object into a dict
geolayerdata_geo_viewport_dict = geolayerdata_geo_viewport_instance.to_dict()
# create an instance of GeolayerdataGeoViewport from a dict
geolayerdata_geo_viewport_from_dict = GeolayerdataGeoViewport.from_dict(geolayerdata_geo_viewport_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


