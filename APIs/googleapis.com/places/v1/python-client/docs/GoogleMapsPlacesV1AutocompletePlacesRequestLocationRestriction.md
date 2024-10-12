# GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction

The region to search. The results will be restricted to the specified region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circle** | [**GoogleMapsPlacesV1Circle**](GoogleMapsPlacesV1Circle.md) |  | [optional] 
**rectangle** | [**GoogleGeoTypeViewport**](GoogleGeoTypeViewport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_autocomplete_places_request_location_restriction import GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction from a JSON string
google_maps_places_v1_autocomplete_places_request_location_restriction_instance = GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction.to_json())

# convert the object into a dict
google_maps_places_v1_autocomplete_places_request_location_restriction_dict = google_maps_places_v1_autocomplete_places_request_location_restriction_instance.to_dict()
# create an instance of GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction from a dict
google_maps_places_v1_autocomplete_places_request_location_restriction_from_dict = GoogleMapsPlacesV1AutocompletePlacesRequestLocationRestriction.from_dict(google_maps_places_v1_autocomplete_places_request_location_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


