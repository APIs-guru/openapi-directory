# GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction

The region to search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circle** | [**GoogleMapsPlacesV1Circle**](GoogleMapsPlacesV1Circle.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_nearby_request_location_restriction import GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction from a JSON string
google_maps_places_v1_search_nearby_request_location_restriction_instance = GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction.to_json())

# convert the object into a dict
google_maps_places_v1_search_nearby_request_location_restriction_dict = google_maps_places_v1_search_nearby_request_location_restriction_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction from a dict
google_maps_places_v1_search_nearby_request_location_restriction_from_dict = GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction.from_dict(google_maps_places_v1_search_nearby_request_location_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


