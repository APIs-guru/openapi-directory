# PlayerScore

A player score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_score** | **str** | The formatted score for this player score. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerScore&#x60;. | [optional] 
**score** | **str** | The numerical value for this player score. | [optional] 
**score_tag** | **str** | Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 
**time_span** | **str** | The time span for this player score. | [optional] 

## Example

```python
from openapi_client.models.player_score import PlayerScore

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerScore from a JSON string
player_score_instance = PlayerScore.from_json(json)
# print the JSON string representation of the object
print(PlayerScore.to_json())

# convert the object into a dict
player_score_dict = player_score_instance.to_dict()
# create an instance of PlayerScore from a dict
player_score_from_dict = PlayerScore.from_dict(player_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


