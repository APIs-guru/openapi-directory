# PlayerLeaderboardScore

A player leaderboard score object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friends_rank** | [**LeaderboardScoreRank**](LeaderboardScoreRank.md) |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerLeaderboardScore&#x60;. | [optional] 
**leaderboard_id** | **str** | The ID of the leaderboard this score is in. | [optional] 
**public_rank** | [**LeaderboardScoreRank**](LeaderboardScoreRank.md) |  | [optional] 
**score_string** | **str** | The formatted value of this score. | [optional] 
**score_tag** | **str** | Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 
**score_value** | **str** | The numerical value of this score. | [optional] 
**social_rank** | [**LeaderboardScoreRank**](LeaderboardScoreRank.md) |  | [optional] 
**time_span** | **str** | The time span of this score. | [optional] 
**write_timestamp** | **str** | The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. | [optional] 

## Example

```python
from openapi_client.models.player_leaderboard_score import PlayerLeaderboardScore

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerLeaderboardScore from a JSON string
player_leaderboard_score_instance = PlayerLeaderboardScore.from_json(json)
# print the JSON string representation of the object
print(PlayerLeaderboardScore.to_json())

# convert the object into a dict
player_leaderboard_score_dict = player_leaderboard_score_instance.to_dict()
# create an instance of PlayerLeaderboardScore from a dict
player_leaderboard_score_from_dict = PlayerLeaderboardScore.from_dict(player_leaderboard_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


