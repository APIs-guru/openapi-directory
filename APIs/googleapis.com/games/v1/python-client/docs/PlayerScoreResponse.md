# PlayerScoreResponse

A list of leaderboard entry resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beaten_score_time_spans** | **List[str]** | The time spans where the submitted score is better than the existing score for that time span. | [optional] 
**formatted_score** | **str** | The formatted value of the submitted score. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerScoreResponse&#x60;. | [optional] 
**leaderboard_id** | **str** | The leaderboard ID that this score was submitted to. | [optional] 
**score_tag** | **str** | Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 
**unbeaten_scores** | [**List[PlayerScore]**](PlayerScore.md) | The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player&#39;s &#x60;DAILY&#x60; score, but not better than the player&#39;s scores for the &#x60;WEEKLY&#x60; or &#x60;ALL_TIME&#x60; time spans. | [optional] 

## Example

```python
from openapi_client.models.player_score_response import PlayerScoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScoreResponse from a JSON string
player_score_response_instance = PlayerScoreResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerScoreResponse.to_json())

# convert the object into a dict
player_score_response_dict = player_score_response_instance.to_dict()
# create an instance of PlayerScoreResponse from a dict
player_score_response_from_dict = PlayerScoreResponse.from_dict(player_score_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


