# StatsResponse

A third party stats resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_session_length_minutes** | **float** | Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information. | [optional] 
**churn_probability** | **float** | The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information. | [optional] 
**days_since_last_played** | **int** | Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. | [optional] 
**high_spender_probability** | **float** | The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#statsResponse&#x60;. | [optional] 
**num_purchases** | **int** | Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. | [optional] 
**num_sessions** | **int** | The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. | [optional] 
**num_sessions_percentile** | **float** | The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. | [optional] 
**spend_percentile** | **float** | The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. | [optional] 
**spend_probability** | **float** | The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. | [optional] 
**total_spend_next_28_days** | **float** | The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information. | [optional] 

## Example

```python
from openapi_client.models.stats_response import StatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StatsResponse from a JSON string
stats_response_instance = StatsResponse.from_json(json)
# print the JSON string representation of the object
print(StatsResponse.to_json())

# convert the object into a dict
stats_response_dict = stats_response_instance.to_dict()
# create an instance of StatsResponse from a dict
stats_response_from_dict = StatsResponse.from_dict(stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


