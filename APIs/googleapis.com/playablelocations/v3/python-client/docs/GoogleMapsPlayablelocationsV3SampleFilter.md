# GoogleMapsPlayablelocationsV3SampleFilter

Specifies the filters to use when searching for playable locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_types** | **List[str]** | Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want. | [optional] 
**max_location_count** | **int** | Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned. | [optional] 
**spacing** | [**GoogleMapsPlayablelocationsV3SampleSpacingOptions**](GoogleMapsPlayablelocationsV3SampleSpacingOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_filter import GoogleMapsPlayablelocationsV3SampleFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SampleFilter from a JSON string
google_maps_playablelocations_v3_sample_filter_instance = GoogleMapsPlayablelocationsV3SampleFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SampleFilter.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_filter_dict = google_maps_playablelocations_v3_sample_filter_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SampleFilter from a dict
google_maps_playablelocations_v3_sample_filter_from_dict = GoogleMapsPlayablelocationsV3SampleFilter.from_dict(google_maps_playablelocations_v3_sample_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


