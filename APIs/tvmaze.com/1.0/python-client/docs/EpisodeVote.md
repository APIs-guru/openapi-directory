# EpisodeVote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episode_id** | **int** |  | [optional] [readonly] 
**vote** | **int** | The vote number | [optional] 
**voted_at** | **int** | Epoch timestamp for when the user voted for the episode | [optional] [readonly] 

## Example

```python
from openapi_client.models.episode_vote import EpisodeVote

# TODO update the JSON string below
json = "{}"
# create an instance of EpisodeVote from a JSON string
episode_vote_instance = EpisodeVote.from_json(json)
# print the JSON string representation of the object
print(EpisodeVote.to_json())

# convert the object into a dict
episode_vote_dict = episode_vote_instance.to_dict()
# create an instance of EpisodeVote from a dict
episode_vote_from_dict = EpisodeVote.from_dict(episode_vote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


