# LeaderboardConfiguration

An leaderboard configuration resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft** | [**LeaderboardConfigurationDetail**](LeaderboardConfigurationDetail.md) |  | [optional] 
**id** | **str** | The ID of the leaderboard. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#leaderboardConfiguration&#x60;. | [optional] 
**published** | [**LeaderboardConfigurationDetail**](LeaderboardConfigurationDetail.md) |  | [optional] 
**score_max** | **str** | Maximum score that can be posted to this leaderboard. | [optional] 
**score_min** | **str** | Minimum score that can be posted to this leaderboard. | [optional] 
**score_order** | **str** |  | [optional] 
**token** | **str** | The token for this resource. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_configuration import LeaderboardConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardConfiguration from a JSON string
leaderboard_configuration_instance = LeaderboardConfiguration.from_json(json)
# print the JSON string representation of the object
print(LeaderboardConfiguration.to_json())

# convert the object into a dict
leaderboard_configuration_dict = leaderboard_configuration_instance.to_dict()
# create an instance of LeaderboardConfiguration from a dict
leaderboard_configuration_from_dict = LeaderboardConfiguration.from_dict(leaderboard_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


