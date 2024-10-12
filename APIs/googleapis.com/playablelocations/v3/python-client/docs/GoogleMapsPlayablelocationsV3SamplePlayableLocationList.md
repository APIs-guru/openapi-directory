# GoogleMapsPlayablelocationsV3SamplePlayableLocationList

A list of PlayableLocation objects that satisfies a single Criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[GoogleMapsPlayablelocationsV3SamplePlayableLocation]**](GoogleMapsPlayablelocationsV3SamplePlayableLocation.md) | A list of playable locations for this game object type. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_playable_location_list import GoogleMapsPlayablelocationsV3SamplePlayableLocationList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationList from a JSON string
google_maps_playablelocations_v3_sample_playable_location_list_instance = GoogleMapsPlayablelocationsV3SamplePlayableLocationList.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SamplePlayableLocationList.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_playable_location_list_dict = google_maps_playablelocations_v3_sample_playable_location_list_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SamplePlayableLocationList from a dict
google_maps_playablelocations_v3_sample_playable_location_list_from_dict = GoogleMapsPlayablelocationsV3SamplePlayableLocationList.from_dict(google_maps_playablelocations_v3_sample_playable_location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


