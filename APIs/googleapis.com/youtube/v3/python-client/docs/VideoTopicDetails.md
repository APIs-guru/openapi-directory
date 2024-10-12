# VideoTopicDetails

Freebase topic information related to the video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevant_topic_ids** | **List[str]** | Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API. | [optional] 
**topic_categories** | **List[str]** | A list of Wikipedia URLs that provide a high-level description of the video&#39;s content. | [optional] 
**topic_ids** | **List[str]** | A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the &lt; a href&#x3D;\&quot;http://wiki.freebase.com/wiki/Topic_API\&quot;&gt;Freebase Topic API. | [optional] 

## Example

```python
from openapi_client.models.video_topic_details import VideoTopicDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoTopicDetails from a JSON string
video_topic_details_instance = VideoTopicDetails.from_json(json)
# print the JSON string representation of the object
print(VideoTopicDetails.to_json())

# convert the object into a dict
video_topic_details_dict = video_topic_details_instance.to_dict()
# create an instance of VideoTopicDetails from a dict
video_topic_details_from_dict = VideoTopicDetails.from_dict(video_topic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


