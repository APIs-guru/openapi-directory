# GoogleMapsPlayablelocationsV3SampleAreaFilter

Specifies the area to search for playable locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**s2_cell_id** | **str** | Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python) | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_area_filter import GoogleMapsPlayablelocationsV3SampleAreaFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SampleAreaFilter from a JSON string
google_maps_playablelocations_v3_sample_area_filter_instance = GoogleMapsPlayablelocationsV3SampleAreaFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SampleAreaFilter.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_area_filter_dict = google_maps_playablelocations_v3_sample_area_filter_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SampleAreaFilter from a dict
google_maps_playablelocations_v3_sample_area_filter_from_dict = GoogleMapsPlayablelocationsV3SampleAreaFilter.from_dict(google_maps_playablelocations_v3_sample_area_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


