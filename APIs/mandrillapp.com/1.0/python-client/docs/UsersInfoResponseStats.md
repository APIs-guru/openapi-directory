# UsersInfoResponseStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_time** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_30_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_60_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_7_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_90_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**today** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_info_response_stats import UsersInfoResponseStats

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoResponseStats from a JSON string
users_info_response_stats_instance = UsersInfoResponseStats.from_json(json)
# print the JSON string representation of the object
print(UsersInfoResponseStats.to_json())

# convert the object into a dict
users_info_response_stats_dict = users_info_response_stats_instance.to_dict()
# create an instance of UsersInfoResponseStats from a dict
users_info_response_stats_from_dict = UsersInfoResponseStats.from_dict(users_info_response_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


