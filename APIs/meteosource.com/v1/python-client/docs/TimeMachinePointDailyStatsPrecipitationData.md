# TimeMachinePointDailyStatsPrecipitationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg** | **float** | Long-term average daily precipitation amount. Units: metric &#x3D; mm/day, us &#x3D; inches per day, uk &#x3D; mm/day, ca &#x3D; mm/day | [optional] 
**probability** | **int** | Long-term average precipitation probability. Unit: \\% | [optional] 

## Example

```python
from openapi_client.models.time_machine_point_daily_stats_precipitation_data import TimeMachinePointDailyStatsPrecipitationData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachinePointDailyStatsPrecipitationData from a JSON string
time_machine_point_daily_stats_precipitation_data_instance = TimeMachinePointDailyStatsPrecipitationData.from_json(json)
# print the JSON string representation of the object
print(TimeMachinePointDailyStatsPrecipitationData.to_json())

# convert the object into a dict
time_machine_point_daily_stats_precipitation_data_dict = time_machine_point_daily_stats_precipitation_data_instance.to_dict()
# create an instance of TimeMachinePointDailyStatsPrecipitationData from a dict
time_machine_point_daily_stats_precipitation_data_from_dict = TimeMachinePointDailyStatsPrecipitationData.from_dict(time_machine_point_daily_stats_precipitation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


