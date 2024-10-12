# PointPointDailyEveningProbData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freeze** | **float** | Probability the temperature drops below 0 °C. (evening avg) Unit: % | [optional] 
**precipitation** | **int** | Probability of non-zero precipitation. Unit: \\% | [optional] 
**storm** | **float** | Total precipitation amount accumulated since last hour. Unit: mm/h | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_evening_prob_data import PointPointDailyEveningProbData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyEveningProbData from a JSON string
point_point_daily_evening_prob_data_instance = PointPointDailyEveningProbData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyEveningProbData.to_json())

# convert the object into a dict
point_point_daily_evening_prob_data_dict = point_point_daily_evening_prob_data_instance.to_dict()
# create an instance of PointPointDailyEveningProbData from a dict
point_point_daily_evening_prob_data_from_dict = PointPointDailyEveningProbData.from_dict(point_point_daily_evening_prob_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


