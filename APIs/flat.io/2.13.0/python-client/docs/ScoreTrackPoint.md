# ScoreTrackPoint

A track synchronization point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**measure_uuid** | **str** | The measure unique identifier | [optional] 
**time** | **float** | The corresponding time in seconds | 
**type** | **str** | The type of the synchronization point. If the type is &#x60;measure&#x60;, the measure uuid must be present in &#x60;measureUuid&#x60; | 

## Example

```python
from openapi_client.models.score_track_point import ScoreTrackPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreTrackPoint from a JSON string
score_track_point_instance = ScoreTrackPoint.from_json(json)
# print the JSON string representation of the object
print(ScoreTrackPoint.to_json())

# convert the object into a dict
score_track_point_dict = score_track_point_instance.to_dict()
# create an instance of ScoreTrackPoint from a dict
score_track_point_from_dict = ScoreTrackPoint.from_dict(score_track_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


