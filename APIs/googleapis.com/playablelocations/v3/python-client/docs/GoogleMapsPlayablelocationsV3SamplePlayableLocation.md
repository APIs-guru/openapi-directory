# GoogleMapsPlayablelocationsV3SamplePlayableLocation

A geographical point suitable for placing game objects in location-based games.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**center_point** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**name** | **str** | Required. The name of this playable location. | [optional] 
**place_id** | **str** | A [place ID] (https://developers.google.com/places/place-id) | [optional] 
**plus_code** | **str** | A [plus code] (http://openlocationcode.com) | [optional] 
**snapped_point** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**types** | **List[str]** | A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_playable_location import GoogleMapsPlayablelocationsV3SamplePlayableLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocation from a JSON string
google_maps_playablelocations_v3_sample_playable_location_instance = GoogleMapsPlayablelocationsV3SamplePlayableLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SamplePlayableLocation.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_playable_location_dict = google_maps_playablelocations_v3_sample_playable_location_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocation from a dict
google_maps_playablelocations_v3_sample_playable_location_from_dict = GoogleMapsPlayablelocationsV3SamplePlayableLocation.from_dict(google_maps_playablelocations_v3_sample_playable_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


