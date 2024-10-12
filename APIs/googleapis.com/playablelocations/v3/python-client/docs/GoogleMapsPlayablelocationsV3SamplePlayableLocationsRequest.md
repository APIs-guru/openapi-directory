# GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest

 Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more \"criteria\" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_filter** | [**GoogleMapsPlayablelocationsV3SampleAreaFilter**](GoogleMapsPlayablelocationsV3SampleAreaFilter.md) |  | [optional] 
**criteria** | [**List[GoogleMapsPlayablelocationsV3SampleCriterion]**](GoogleMapsPlayablelocationsV3SampleCriterion.md) | Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_playable_locations_request import GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest from a JSON string
google_maps_playablelocations_v3_sample_playable_locations_request_instance = GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_playable_locations_request_dict = google_maps_playablelocations_v3_sample_playable_locations_request_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest from a dict
google_maps_playablelocations_v3_sample_playable_locations_request_from_dict = GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest.from_dict(google_maps_playablelocations_v3_sample_playable_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


