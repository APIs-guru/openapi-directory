# GoogleMapsPlacesV1PlaceAccessibilityOptions

Information about the accessibility options a place offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wheelchair_accessible_entrance** | **bool** | Places has wheelchair accessible entrance. | [optional] 
**wheelchair_accessible_parking** | **bool** | Place offers wheelchair accessible parking. | [optional] 
**wheelchair_accessible_restroom** | **bool** | Place has wheelchair accessible restroom. | [optional] 
**wheelchair_accessible_seating** | **bool** | Place has wheelchair accessible seating. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_accessibility_options import GoogleMapsPlacesV1PlaceAccessibilityOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceAccessibilityOptions from a JSON string
google_maps_places_v1_place_accessibility_options_instance = GoogleMapsPlacesV1PlaceAccessibilityOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceAccessibilityOptions.to_json())

# convert the object into a dict
google_maps_places_v1_place_accessibility_options_dict = google_maps_places_v1_place_accessibility_options_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceAccessibilityOptions from a dict
google_maps_places_v1_place_accessibility_options_from_dict = GoogleMapsPlacesV1PlaceAccessibilityOptions.from_dict(google_maps_places_v1_place_accessibility_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


