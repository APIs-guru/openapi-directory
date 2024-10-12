# LeaderboardConfigurationListResponse

A ListConfigurations response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[LeaderboardConfiguration]**](LeaderboardConfiguration.md) | The leaderboard configurations. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#leaderboardConfigurationListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_configuration_list_response import LeaderboardConfigurationListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardConfigurationListResponse from a JSON string
leaderboard_configuration_list_response_instance = LeaderboardConfigurationListResponse.from_json(json)
# print the JSON string representation of the object
print(LeaderboardConfigurationListResponse.to_json())

# convert the object into a dict
leaderboard_configuration_list_response_dict = leaderboard_configuration_list_response_instance.to_dict()
# create an instance of LeaderboardConfigurationListResponse from a dict
leaderboard_configuration_list_response_from_dict = LeaderboardConfigurationListResponse.from_dict(leaderboard_configuration_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


