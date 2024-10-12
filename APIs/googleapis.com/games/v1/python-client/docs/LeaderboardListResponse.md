# LeaderboardListResponse

A list of leaderboard objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Leaderboard]**](Leaderboard.md) | The leaderboards. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#leaderboardListResponse&#x60;. | [optional] 
**next_page_token** | **str** | Token corresponding to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.leaderboard_list_response import LeaderboardListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardListResponse from a JSON string
leaderboard_list_response_instance = LeaderboardListResponse.from_json(json)
# print the JSON string representation of the object
print(LeaderboardListResponse.to_json())

# convert the object into a dict
leaderboard_list_response_dict = leaderboard_list_response_instance.to_dict()
# create an instance of LeaderboardListResponse from a dict
leaderboard_list_response_from_dict = LeaderboardListResponse.from_dict(leaderboard_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


