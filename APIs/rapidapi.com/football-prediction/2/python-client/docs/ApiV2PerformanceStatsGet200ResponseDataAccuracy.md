# ApiV2PerformanceStatsGet200ResponseDataAccuracy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_14_days** | **float** |  | [optional] 
**last_30_days** | **float** |  | [optional] 
**last_7_days** | **float** |  | [optional] 
**yesterday** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_performance_stats_get200_response_data_accuracy import ApiV2PerformanceStatsGet200ResponseDataAccuracy

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2PerformanceStatsGet200ResponseDataAccuracy from a JSON string
api_v2_performance_stats_get200_response_data_accuracy_instance = ApiV2PerformanceStatsGet200ResponseDataAccuracy.from_json(json)
# print the JSON string representation of the object
print(ApiV2PerformanceStatsGet200ResponseDataAccuracy.to_json())

# convert the object into a dict
api_v2_performance_stats_get200_response_data_accuracy_dict = api_v2_performance_stats_get200_response_data_accuracy_instance.to_dict()
# create an instance of ApiV2PerformanceStatsGet200ResponseDataAccuracy from a dict
api_v2_performance_stats_get200_response_data_accuracy_from_dict = ApiV2PerformanceStatsGet200ResponseDataAccuracy.from_dict(api_v2_performance_stats_get200_response_data_accuracy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


