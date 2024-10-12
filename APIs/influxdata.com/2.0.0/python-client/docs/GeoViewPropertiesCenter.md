# GeoViewPropertiesCenter

Coordinates of the center of the map

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude of the center of the map | 
**lon** | **float** | Longitude of the center of the map | 

## Example

```python
from openapi_client.models.geo_view_properties_center import GeoViewPropertiesCenter

# TODO update the JSON string below
json = "{}"
# create an instance of GeoViewPropertiesCenter from a JSON string
geo_view_properties_center_instance = GeoViewPropertiesCenter.from_json(json)
# print the JSON string representation of the object
print(GeoViewPropertiesCenter.to_json())

# convert the object into a dict
geo_view_properties_center_dict = geo_view_properties_center_instance.to_dict()
# create an instance of GeoViewPropertiesCenter from a dict
geo_view_properties_center_from_dict = GeoViewPropertiesCenter.from_dict(geo_view_properties_center_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


