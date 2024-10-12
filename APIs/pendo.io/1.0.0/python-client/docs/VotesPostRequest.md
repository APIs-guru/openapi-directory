# VotesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | [optional] 
**votes** | [**List[FeatureVote]**](FeatureVote.md) |  | [optional] 

## Example

```python
from openapi_client.models.votes_post_request import VotesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VotesPostRequest from a JSON string
votes_post_request_instance = VotesPostRequest.from_json(json)
# print the JSON string representation of the object
print(VotesPostRequest.to_json())

# convert the object into a dict
votes_post_request_dict = votes_post_request_instance.to_dict()
# create an instance of VotesPostRequest from a dict
votes_post_request_from_dict = VotesPostRequest.from_dict(votes_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


