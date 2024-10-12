# SendersInfoResponseStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_30_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_60_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_7_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**last_90_days** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 
**today** | [**SendersInfoResponseStatsLast30Days**](SendersInfoResponseStatsLast30Days.md) |  | [optional] 

## Example

```python
from openapi_client.models.senders_info_response_stats import SendersInfoResponseStats

# TODO update the JSON string below
json = "{}"
# create an instance of SendersInfoResponseStats from a JSON string
senders_info_response_stats_instance = SendersInfoResponseStats.from_json(json)
# print the JSON string representation of the object
print(SendersInfoResponseStats.to_json())

# convert the object into a dict
senders_info_response_stats_dict = senders_info_response_stats_instance.to_dict()
# create an instance of SendersInfoResponseStats from a dict
senders_info_response_stats_from_dict = SendersInfoResponseStats.from_dict(senders_info_response_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


