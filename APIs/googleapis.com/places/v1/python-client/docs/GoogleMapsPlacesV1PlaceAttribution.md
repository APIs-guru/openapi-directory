# GoogleMapsPlacesV1PlaceAttribution

Information about data providers of this place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **str** | Name of the Place&#39;s data provider. | [optional] 
**provider_uri** | **str** | URI to the Place&#39;s data provider. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_attribution import GoogleMapsPlacesV1PlaceAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceAttribution from a JSON string
google_maps_places_v1_place_attribution_instance = GoogleMapsPlacesV1PlaceAttribution.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceAttribution.to_json())

# convert the object into a dict
google_maps_places_v1_place_attribution_dict = google_maps_places_v1_place_attribution_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceAttribution from a dict
google_maps_places_v1_place_attribution_from_dict = GoogleMapsPlacesV1PlaceAttribution.from_dict(google_maps_places_v1_place_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


