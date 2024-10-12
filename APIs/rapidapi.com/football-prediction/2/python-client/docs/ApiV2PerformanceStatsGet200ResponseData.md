# ApiV2PerformanceStatsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | [**ApiV2PerformanceStatsGet200ResponseDataAccuracy**](ApiV2PerformanceStatsGet200ResponseDataAccuracy.md) |  | [optional] 
**details** | [**ApiV2PerformanceStatsGet200ResponseDataDetails**](ApiV2PerformanceStatsGet200ResponseDataDetails.md) |  | [optional] 
**market** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_performance_stats_get200_response_data import ApiV2PerformanceStatsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2PerformanceStatsGet200ResponseData from a JSON string
api_v2_performance_stats_get200_response_data_instance = ApiV2PerformanceStatsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiV2PerformanceStatsGet200ResponseData.to_json())

# convert the object into a dict
api_v2_performance_stats_get200_response_data_dict = api_v2_performance_stats_get200_response_data_instance.to_dict()
# create an instance of ApiV2PerformanceStatsGet200ResponseData from a dict
api_v2_performance_stats_get200_response_data_from_dict = ApiV2PerformanceStatsGet200ResponseData.from_dict(api_v2_performance_stats_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


