# ScrobbleShowsPostRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airdate** | **date** | The episode airdate | [optional] 
**episode** | **int** | The episode number | [optional] 
**marked_at** | **int** | Epoch timestamp for when the user watched the episode, or 0 for unknown. | [optional] 
**season** | **int** | The season number | [optional] 
**type** | **object** | 0 for watched, 1 for acquired, 2 for skipped | [optional] 

## Example

```python
from openapi_client.models.scrobble_shows_post_request_inner import ScrobbleShowsPostRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScrobbleShowsPostRequestInner from a JSON string
scrobble_shows_post_request_inner_instance = ScrobbleShowsPostRequestInner.from_json(json)
# print the JSON string representation of the object
print(ScrobbleShowsPostRequestInner.to_json())

# convert the object into a dict
scrobble_shows_post_request_inner_dict = scrobble_shows_post_request_inner_instance.to_dict()
# create an instance of ScrobbleShowsPostRequestInner from a dict
scrobble_shows_post_request_inner_from_dict = ScrobbleShowsPostRequestInner.from_dict(scrobble_shows_post_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


