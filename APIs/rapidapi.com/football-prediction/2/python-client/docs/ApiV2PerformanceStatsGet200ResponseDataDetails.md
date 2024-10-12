# ApiV2PerformanceStatsGet200ResponseDataDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_14_days** | [**ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days**](ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days.md) |  | [optional] 
**last_30_days** | [**ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days**](ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days.md) |  | [optional] 
**last_7_days** | [**ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days**](ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days.md) |  | [optional] 
**yesterday** | [**ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days**](ApiV2PerformanceStatsGet200ResponseDataDetailsLast14Days.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_performance_stats_get200_response_data_details import ApiV2PerformanceStatsGet200ResponseDataDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2PerformanceStatsGet200ResponseDataDetails from a JSON string
api_v2_performance_stats_get200_response_data_details_instance = ApiV2PerformanceStatsGet200ResponseDataDetails.from_json(json)
# print the JSON string representation of the object
print(ApiV2PerformanceStatsGet200ResponseDataDetails.to_json())

# convert the object into a dict
api_v2_performance_stats_get200_response_data_details_dict = api_v2_performance_stats_get200_response_data_details_instance.to_dict()
# create an instance of ApiV2PerformanceStatsGet200ResponseDataDetails from a dict
api_v2_performance_stats_get200_response_data_details_from_dict = ApiV2PerformanceStatsGet200ResponseDataDetails.from_dict(api_v2_performance_stats_get200_response_data_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


