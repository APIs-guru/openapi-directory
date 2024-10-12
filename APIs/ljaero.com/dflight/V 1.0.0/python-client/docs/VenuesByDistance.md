# VenuesByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.venues_by_distance import VenuesByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of VenuesByDistance from a JSON string
venues_by_distance_instance = VenuesByDistance.from_json(json)
# print the JSON string representation of the object
print(VenuesByDistance.to_json())

# convert the object into a dict
venues_by_distance_dict = venues_by_distance_instance.to_dict()
# create an instance of VenuesByDistance from a dict
venues_by_distance_from_dict = VenuesByDistance.from_dict(venues_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


