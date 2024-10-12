# GoogleMapsPlayablelocationsV3SampleSpacingOptions

A set of options that specifies the separation between playable locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_spacing_meters** | **float** | Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing&#x3D;250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From-&gt;To. * X-&gt;X: 400m * Y-&gt;X, Y-&gt;Y: unspecified. * Z-&gt;X, Z-&gt;Y, Z-&gt;Z: 200m. | [optional] 
**point_type** | **str** | Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is &#x60;CENTER_POINT&#x60;. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_sample_spacing_options import GoogleMapsPlayablelocationsV3SampleSpacingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3SampleSpacingOptions from a JSON string
google_maps_playablelocations_v3_sample_spacing_options_instance = GoogleMapsPlayablelocationsV3SampleSpacingOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3SampleSpacingOptions.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_sample_spacing_options_dict = google_maps_playablelocations_v3_sample_spacing_options_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3SampleSpacingOptions from a dict
google_maps_playablelocations_v3_sample_spacing_options_from_dict = GoogleMapsPlayablelocationsV3SampleSpacingOptions.from_dict(google_maps_playablelocations_v3_sample_spacing_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


