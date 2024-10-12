# PointPointDailyAllDayProbData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freeze** | **float** | Probability the temperature drops below 0 °C. (allday avg) Unit: % | [optional] 
**precipitation** | **int** | Probability of non-zero precipitation. Unit: \\% | [optional] 
**storm** | **float** | Total precipitation amount accumulated since last hour. Unit: mm/h | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_all_day_prob_data import PointPointDailyAllDayProbData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyAllDayProbData from a JSON string
point_point_daily_all_day_prob_data_instance = PointPointDailyAllDayProbData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyAllDayProbData.to_json())

# convert the object into a dict
point_point_daily_all_day_prob_data_dict = point_point_daily_all_day_prob_data_instance.to_dict()
# create an instance of PointPointDailyAllDayProbData from a dict
point_point_daily_all_day_prob_data_from_dict = PointPointDailyAllDayProbData.from_dict(point_point_daily_all_day_prob_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


