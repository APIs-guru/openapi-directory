# GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse

 Response for the SamplePlayableLocations method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations_per_game_object_type** | [**Dict[str, GoogleMapsPlayablelocationsV3SamplePlayableLocationList]**](GoogleMapsPlayablelocationsV3SamplePlayableLocationList.md) | Each PlayableLocation object corresponds to a game_object_type specified in the request. | [optional] 
**ttl** | **str** | Required. Specifies the \&quot;time-to-live\&quot; for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently). | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_playable_locations_response import GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse from a JSON string
google_maps_playablelocations_v3_sample_playable_locations_response_instance = GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_playable_locations_response_dict = google_maps_playablelocations_v3_sample_playable_locations_response_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse from a dict
google_maps_playablelocations_v3_sample_playable_locations_response_from_dict = GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse.from_dict(google_maps_playablelocations_v3_sample_playable_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


