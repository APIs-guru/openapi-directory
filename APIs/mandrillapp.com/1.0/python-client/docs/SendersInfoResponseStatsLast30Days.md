# SendersInfoResponseStatsLast30Days


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 
**unique_opens** | **int** |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.senders_info_response_stats_last30_days import SendersInfoResponseStatsLast30Days

# TODO update the JSON string below
json = "{}"
# create an instance of SendersInfoResponseStatsLast30Days from a JSON string
senders_info_response_stats_last30_days_instance = SendersInfoResponseStatsLast30Days.from_json(json)
# print the JSON string representation of the object
print(SendersInfoResponseStatsLast30Days.to_json())

# convert the object into a dict
senders_info_response_stats_last30_days_dict = senders_info_response_stats_last30_days_instance.to_dict()
# create an instance of SendersInfoResponseStatsLast30Days from a dict
senders_info_response_stats_last30_days_from_dict = SendersInfoResponseStatsLast30Days.from_dict(senders_info_response_stats_last30_days_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


