# ScrobbleEpisodesPostRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episode_id** | **int** | The TVmaze episode ID | [optional] 
**marked_at** | **int** | Epoch timestamp for when the user watched the episode, or 0 for unknown. | [optional] 
**type** | **object** | 0 for watched, 1 for acquired, 2 for skipped | [optional] 

## Example

```python
from openapi_client.models.scrobble_episodes_post_request_inner import ScrobbleEpisodesPostRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScrobbleEpisodesPostRequestInner from a JSON string
scrobble_episodes_post_request_inner_instance = ScrobbleEpisodesPostRequestInner.from_json(json)
# print the JSON string representation of the object
print(ScrobbleEpisodesPostRequestInner.to_json())

# convert the object into a dict
scrobble_episodes_post_request_inner_dict = scrobble_episodes_post_request_inner_instance.to_dict()
# create an instance of ScrobbleEpisodesPostRequestInner from a dict
scrobble_episodes_post_request_inner_from_dict = ScrobbleEpisodesPostRequestInner.from_dict(scrobble_episodes_post_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


