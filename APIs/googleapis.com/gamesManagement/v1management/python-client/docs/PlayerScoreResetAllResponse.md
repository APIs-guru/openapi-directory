# PlayerScoreResetAllResponse

A list of leaderboard reset resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#playerScoreResetAllResponse&#x60;. | [optional] 
**results** | [**List[PlayerScoreResetResponse]**](PlayerScoreResetResponse.md) | The leaderboard reset results. | [optional] 

## Example

```python
from openapi_client.models.player_score_reset_all_response import PlayerScoreResetAllResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScoreResetAllResponse from a JSON string
player_score_reset_all_response_instance = PlayerScoreResetAllResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerScoreResetAllResponse.to_json())

# convert the object into a dict
player_score_reset_all_response_dict = player_score_reset_all_response_instance.to_dict()
# create an instance of PlayerScoreResetAllResponse from a dict
player_score_reset_all_response_from_dict = PlayerScoreResetAllResponse.from_dict(player_score_reset_all_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


