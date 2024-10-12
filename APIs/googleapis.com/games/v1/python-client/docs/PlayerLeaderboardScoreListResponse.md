# PlayerLeaderboardScoreListResponse

A list of player leaderboard scores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PlayerLeaderboardScore]**](PlayerLeaderboardScore.md) | The leaderboard scores. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerLeaderboardScoreListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 
**player** | [**Player**](Player.md) |  | [optional] 

## Example

```python
from openapi_client.models.player_leaderboard_score_list_response import PlayerLeaderboardScoreListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerLeaderboardScoreListResponse from a JSON string
player_leaderboard_score_list_response_instance = PlayerLeaderboardScoreListResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerLeaderboardScoreListResponse.to_json())

# convert the object into a dict
player_leaderboard_score_list_response_dict = player_leaderboard_score_list_response_instance.to_dict()
# create an instance of PlayerLeaderboardScoreListResponse from a dict
player_leaderboard_score_list_response_from_dict = PlayerLeaderboardScoreListResponse.from_dict(player_leaderboard_score_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


