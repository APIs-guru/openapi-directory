# MarkedEpisode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**MarkedEpisodeEmbedded**](MarkedEpisodeEmbedded.md) |  | [optional] 
**episode_id** | **int** |  | [optional] [readonly] 
**marked_at** | **int** | Epoch timestamp for when the user watched the episode, or 0 for unknown. | [optional] 
**type** | **object** | 0 for watched, 1 for acquired, 2 for skipped | [optional] 

## Example

```python
from openapi_client.models.marked_episode import MarkedEpisode

# TODO update the JSON string below
json = "{}"
# create an instance of MarkedEpisode from a JSON string
marked_episode_instance = MarkedEpisode.from_json(json)
# print the JSON string representation of the object
print(MarkedEpisode.to_json())

# convert the object into a dict
marked_episode_dict = marked_episode_instance.to_dict()
# create an instance of MarkedEpisode from a dict
marked_episode_from_dict = MarkedEpisode.from_dict(marked_episode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


