# GeocodingLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city of the address | [optional] 
**country** | **str** | The country of the address | [optional] 
**housenumber** | **str** | The housenumber of the address | [optional] 
**name** | **str** | The name of the entity. Can be a boundary, POI, address, etc | [optional] 
**osm_id** | **str** | The OSM ID of the entity | [optional] 
**osm_key** | **str** | The OSM key of the entity | [optional] 
**osm_type** | **str** | N &#x3D; node, R &#x3D; relation, W &#x3D; way | [optional] 
**point** | [**GeocodingPoint**](GeocodingPoint.md) |  | [optional] 
**postcode** | **str** | The postcode of the address | [optional] 
**state** | **str** | The state of the address | [optional] 
**street** | **str** | The street of the address | [optional] 

## Example

```python
from openapi_client.models.geocoding_location import GeocodingLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GeocodingLocation from a JSON string
geocoding_location_instance = GeocodingLocation.from_json(json)
# print the JSON string representation of the object
print(GeocodingLocation.to_json())

# convert the object into a dict
geocoding_location_dict = geocoding_location_instance.to_dict()
# create an instance of GeocodingLocation from a dict
geocoding_location_from_dict = GeocodingLocation.from_dict(geocoding_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


