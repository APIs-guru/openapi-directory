# GoogleMapsPlacesV1SearchTextRequestLocationRestriction

The region to search. This location serves as a restriction which means results outside given location will not be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rectangle** | [**GoogleGeoTypeViewport**](GoogleGeoTypeViewport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_text_request_location_restriction import GoogleMapsPlacesV1SearchTextRequestLocationRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchTextRequestLocationRestriction from a JSON string
google_maps_places_v1_search_text_request_location_restriction_instance = GoogleMapsPlacesV1SearchTextRequestLocationRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchTextRequestLocationRestriction.to_json())

# convert the object into a dict
google_maps_places_v1_search_text_request_location_restriction_dict = google_maps_places_v1_search_text_request_location_restriction_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchTextRequestLocationRestriction from a dict
google_maps_places_v1_search_text_request_location_restriction_from_dict = GoogleMapsPlacesV1SearchTextRequestLocationRestriction.from_dict(google_maps_places_v1_search_text_request_location_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


