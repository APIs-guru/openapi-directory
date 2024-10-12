# ShowVote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**show_id** | **int** |  | [optional] [readonly] 
**vote** | **int** | The vote number | [optional] 
**voted_at** | **int** | Epoch timestamp for when the user voted for the episode | [optional] [readonly] 

## Example

```python
from openapi_client.models.show_vote import ShowVote

# TODO update the JSON string below
json = "{}"
# create an instance of ShowVote from a JSON string
show_vote_instance = ShowVote.from_json(json)
# print the JSON string representation of the object
print(ShowVote.to_json())

# convert the object into a dict
show_vote_dict = show_vote_instance.to_dict()
# create an instance of ShowVote from a dict
show_vote_from_dict = ShowVote.from_dict(show_vote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


