# GeoCoordinates

Defines the format of a geographic coordinate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | The latitude component of the geographic coordinate. | [optional] 
**longitude** | **float** | The longitude component of the geographic coordinate. | [optional] 

## Example

```python
from openapi_client.models.geo_coordinates import GeoCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of GeoCoordinates from a JSON string
geo_coordinates_instance = GeoCoordinates.from_json(json)
# print the JSON string representation of the object
print(GeoCoordinates.to_json())

# convert the object into a dict
geo_coordinates_dict = geo_coordinates_instance.to_dict()
# create an instance of GeoCoordinates from a dict
geo_coordinates_from_dict = GeoCoordinates.from_dict(geo_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


