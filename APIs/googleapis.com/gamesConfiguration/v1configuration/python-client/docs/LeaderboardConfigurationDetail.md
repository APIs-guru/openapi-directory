# LeaderboardConfigurationDetail

A leaderboard configuration detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_url** | **str** | The icon url of this leaderboard. Writes to this field are ignored. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#leaderboardConfigurationDetail&#x60;. | [optional] 
**name** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**score_format** | [**GamesNumberFormatConfiguration**](GamesNumberFormatConfiguration.md) |  | [optional] 
**sort_rank** | **int** | The sort rank of this leaderboard. Writes to this field are ignored. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_configuration_detail import LeaderboardConfigurationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardConfigurationDetail from a JSON string
leaderboard_configuration_detail_instance = LeaderboardConfigurationDetail.from_json(json)
# print the JSON string representation of the object
print(LeaderboardConfigurationDetail.to_json())

# convert the object into a dict
leaderboard_configuration_detail_dict = leaderboard_configuration_detail_instance.to_dict()
# create an instance of LeaderboardConfigurationDetail from a dict
leaderboard_configuration_detail_from_dict = LeaderboardConfigurationDetail.from_dict(leaderboard_configuration_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


