# LeaderboardEntry

The Leaderboard Entry resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_score** | **str** | The localized string for the numerical value of this score. | [optional] 
**formatted_score_rank** | **str** | The localized string for the rank of this score for this leaderboard. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#leaderboardEntry&#x60;. | [optional] 
**player** | [**Player**](Player.md) |  | [optional] 
**score_rank** | **str** | The rank of this score for this leaderboard. | [optional] 
**score_tag** | **str** | Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. | [optional] 
**score_value** | **str** | The numerical value of this score. | [optional] 
**time_span** | **str** | The time span of this high score. | [optional] 
**write_timestamp_millis** | **str** | The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_entry import LeaderboardEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardEntry from a JSON string
leaderboard_entry_instance = LeaderboardEntry.from_json(json)
# print the JSON string representation of the object
print(LeaderboardEntry.to_json())

# convert the object into a dict
leaderboard_entry_dict = leaderboard_entry_instance.to_dict()
# create an instance of LeaderboardEntry from a dict
leaderboard_entry_from_dict = LeaderboardEntry.from_dict(leaderboard_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


