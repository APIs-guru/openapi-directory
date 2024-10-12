# PlayerScoreResetResponse

A list of reset leaderboard entry resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition_id** | **str** | The ID of an leaderboard for which player state has been updated. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#playerScoreResetResponse&#x60;. | [optional] 
**reset_score_time_spans** | **List[str]** | The time spans of the updated score. Possible values are: - \&quot;&#x60;ALL_TIME&#x60;\&quot; - The score is an all-time score. - \&quot;&#x60;WEEKLY&#x60;\&quot; - The score is a weekly score. - \&quot;&#x60;DAILY&#x60;\&quot; - The score is a daily score.  | [optional] 

## Example

```python
from openapi_client.models.player_score_reset_response import PlayerScoreResetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScoreResetResponse from a JSON string
player_score_reset_response_instance = PlayerScoreResetResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerScoreResetResponse.to_json())

# convert the object into a dict
player_score_reset_response_dict = player_score_reset_response_instance.to_dict()
# create an instance of PlayerScoreResetResponse from a dict
player_score_reset_response_from_dict = PlayerScoreResetResponse.from_dict(player_score_reset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


