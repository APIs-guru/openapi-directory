# VideoAllOfNonPublicMetrics

Nonpublic engagement metrics for the Media at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**playback_0_count** | **int** | Number of users who made it through 0% of the video. | [optional] 
**playback_100_count** | **int** | Number of users who made it through 100% of the video. | [optional] 
**playback_25_count** | **int** | Number of users who made it through 25% of the video. | [optional] 
**playback_50_count** | **int** | Number of users who made it through 50% of the video. | [optional] 
**playback_75_count** | **int** | Number of users who made it through 75% of the video. | [optional] 

## Example

```python
from openapi_client.models.video_all_of_non_public_metrics import VideoAllOfNonPublicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAllOfNonPublicMetrics from a JSON string
video_all_of_non_public_metrics_instance = VideoAllOfNonPublicMetrics.from_json(json)
# print the JSON string representation of the object
print(VideoAllOfNonPublicMetrics.to_json())

# convert the object into a dict
video_all_of_non_public_metrics_dict = video_all_of_non_public_metrics_instance.to_dict()
# create an instance of VideoAllOfNonPublicMetrics from a dict
video_all_of_non_public_metrics_from_dict = VideoAllOfNonPublicMetrics.from_dict(video_all_of_non_public_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


