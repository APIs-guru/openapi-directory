# VideoStatistics

Statistics about the video, such as the number of times the video was viewed or liked.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_count** | **str** | The number of comments for the video. | [optional] 
**dislike_count** | **str** | The number of users who have indicated that they disliked the video by giving it a negative rating. | [optional] 
**favorite_count** | **str** | The number of users who currently have the video marked as a favorite video. | [optional] 
**like_count** | **str** | The number of users who have indicated that they liked the video by giving it a positive rating. | [optional] 
**view_count** | **str** | The number of times the video has been viewed. | [optional] 

## Example

```python
from openapi_client.models.video_statistics import VideoStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of VideoStatistics from a JSON string
video_statistics_instance = VideoStatistics.from_json(json)
# print the JSON string representation of the object
print(VideoStatistics.to_json())

# convert the object into a dict
video_statistics_dict = video_statistics_instance.to_dict()
# create an instance of VideoStatistics from a dict
video_statistics_from_dict = VideoStatistics.from_dict(video_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


