# PodcastEpisodeIndex

Representation of a podcast episode returned in a list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_name** | **str** |  | 
**id** | **int** |  | 
**image_url** | **str** | Podcast episode image url or podcast image url | 
**path** | **str** |  | 
**podcast** | [**SharedPodcast**](SharedPodcast.md) |  | 
**title** | **str** |  | 
**type_of** | **str** |  | 

## Example

```python
from openapi_client.models.podcast_episode_index import PodcastEpisodeIndex

# TODO update the JSON string below
json = "{}"
# create an instance of PodcastEpisodeIndex from a JSON string
podcast_episode_index_instance = PodcastEpisodeIndex.from_json(json)
# print the JSON string representation of the object
print(PodcastEpisodeIndex.to_json())

# convert the object into a dict
podcast_episode_index_dict = podcast_episode_index_instance.to_dict()
# create an instance of PodcastEpisodeIndex from a dict
podcast_episode_index_from_dict = PodcastEpisodeIndex.from_dict(podcast_episode_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


