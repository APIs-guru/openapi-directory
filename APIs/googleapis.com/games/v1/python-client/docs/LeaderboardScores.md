# LeaderboardScores

A ListScores response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[LeaderboardEntry]**](LeaderboardEntry.md) | The scores in the leaderboard. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#leaderboardScores&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 
**num_scores** | **str** | The total number of scores in the leaderboard. | [optional] 
**player_score** | [**LeaderboardEntry**](LeaderboardEntry.md) |  | [optional] 
**prev_page_token** | **str** | The pagination token for the previous page of results. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_scores import LeaderboardScores

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardScores from a JSON string
leaderboard_scores_instance = LeaderboardScores.from_json(json)
# print the JSON string representation of the object
print(LeaderboardScores.to_json())

# convert the object into a dict
leaderboard_scores_dict = leaderboard_scores_instance.to_dict()
# create an instance of LeaderboardScores from a dict
leaderboard_scores_from_dict = LeaderboardScores.from_dict(leaderboard_scores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


