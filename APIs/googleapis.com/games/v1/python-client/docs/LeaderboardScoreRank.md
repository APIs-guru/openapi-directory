# LeaderboardScoreRank

A score rank in a leaderboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_num_scores** | **str** | The number of scores in the leaderboard as a string. | [optional] 
**formatted_rank** | **str** | The rank in the leaderboard as a string. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#leaderboardScoreRank&#x60;. | [optional] 
**num_scores** | **str** | The number of scores in the leaderboard. | [optional] 
**rank** | **str** | The rank in the leaderboard. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_score_rank import LeaderboardScoreRank

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardScoreRank from a JSON string
leaderboard_score_rank_instance = LeaderboardScoreRank.from_json(json)
# print the JSON string representation of the object
print(LeaderboardScoreRank.to_json())

# convert the object into a dict
leaderboard_score_rank_dict = leaderboard_score_rank_instance.to_dict()
# create an instance of LeaderboardScoreRank from a dict
leaderboard_score_rank_from_dict = LeaderboardScoreRank.from_dict(leaderboard_score_rank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


