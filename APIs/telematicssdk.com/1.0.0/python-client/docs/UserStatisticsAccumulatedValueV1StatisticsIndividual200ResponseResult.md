# UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceleration_count** | **float** |  | [optional] 
**app_id** | **str** |  | [optional] 
**average_speed_kmh** | **float** |  | [optional] 
**average_speed_mileh** | **float** |  | [optional] 
**breaking_count** | **float** |  | [optional] 
**company_id** | **str** |  | [optional] 
**cornering_count** | **float** |  | [optional] 
**day_driving_time** | **float** |  | [optional] 
**device_token** | **str** |  | [optional] 
**driver_trips_count** | **float** |  | [optional] 
**driving_time** | **float** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**max_speed_kmh** | **float** |  | [optional] 
**max_speed_mileh** | **float** |  | [optional] 
**mileage_km** | **float** |  | [optional] 
**mileage_mile** | **float** |  | [optional] 
**night_driving_time** | **float** |  | [optional] 
**other_trips_count** | **float** |  | [optional] 
**phone_usage_distance_km** | **float** |  | [optional] 
**phone_usage_distance_mile** | **float** |  | [optional] 
**phone_usage_duration_min** | **float** |  | [optional] 
**phone_usage_over_speed_distance_km** | **float** |  | [optional] 
**phone_usage_over_speed_distance_mile** | **float** |  | [optional] 
**phone_usage_over_speed_duration_min** | **float** |  | [optional] 
**rush_hours_driving_time** | **float** |  | [optional] 
**total_speeding_km** | **float** |  | [optional] 
**total_speeding_mile** | **float** |  | [optional] 
**trips_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.user_statistics_accumulated_value_v1_statistics_individual200_response_result import UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult from a JSON string
user_statistics_accumulated_value_v1_statistics_individual200_response_result_instance = UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult.to_json())

# convert the object into a dict
user_statistics_accumulated_value_v1_statistics_individual200_response_result_dict = user_statistics_accumulated_value_v1_statistics_individual200_response_result_instance.to_dict()
# create an instance of UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult from a dict
user_statistics_accumulated_value_v1_statistics_individual200_response_result_from_dict = UserStatisticsAccumulatedValueV1StatisticsIndividual200ResponseResult.from_dict(user_statistics_accumulated_value_v1_statistics_individual200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


