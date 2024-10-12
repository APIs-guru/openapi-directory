# ScoreTrack

An audio track for a score

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the track | [optional] 
**creator** | **str** | The unique identifier of the track creator | [optional] 
**default** | **bool** | True if the track should be used as default audio source | [optional] 
**id** | **str** | The unique identifier of the score track | [optional] 
**media_id** | **str** | The unique identifier of the track when hosted on an external service. For example, if the url is &#x60;https://www.youtube.com/watch?v&#x3D;dQw4w9WgXcQ&#x60;, &#x60;mediaId&#x60; will be &#x60;dQw4w9WgXcQ&#x60;  | [optional] 
**modification_date** | **datetime** | The modification date of the track | [optional] 
**score** | **str** | The unique identifier of the score | [optional] 
**state** | [**ScoreTrackState**](ScoreTrackState.md) |  | [optional] [default to ScoreTrackState.DRAFT]
**synchronization_points** | [**List[ScoreTrackPoint]**](ScoreTrackPoint.md) |  | [optional] 
**title** | **str** | Title of the track | [optional] 
**type** | [**ScoreTrackType**](ScoreTrackType.md) |  | [optional] 
**url** | **str** | The URL of the track | [optional] 

## Example

```python
from openapi_client.models.score_track import ScoreTrack

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreTrack from a JSON string
score_track_instance = ScoreTrack.from_json(json)
# print the JSON string representation of the object
print(ScoreTrack.to_json())

# convert the object into a dict
score_track_dict = score_track_instance.to_dict()
# create an instance of ScoreTrack from a dict
score_track_from_dict = ScoreTrack.from_dict(score_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


