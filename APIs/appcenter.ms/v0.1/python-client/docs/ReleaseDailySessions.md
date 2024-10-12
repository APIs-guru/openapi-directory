# ReleaseDailySessions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_sessions_per_day** | **float** |  | [optional] 
**sessions** | [**List[ReleaseDailySessionsSessionsInner]**](ReleaseDailySessionsSessionsInner.md) | Sessions per day. | [optional] 
**total_session_counts** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.release_daily_sessions import ReleaseDailySessions

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseDailySessions from a JSON string
release_daily_sessions_instance = ReleaseDailySessions.from_json(json)
# print the JSON string representation of the object
print(ReleaseDailySessions.to_json())

# convert the object into a dict
release_daily_sessions_dict = release_daily_sessions_instance.to_dict()
# create an instance of ReleaseDailySessions from a dict
release_daily_sessions_from_dict = ReleaseDailySessions.from_dict(release_daily_sessions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


