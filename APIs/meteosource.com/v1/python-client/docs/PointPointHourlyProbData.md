# PointPointHourlyProbData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**freeze** | **float** | Unit: \\% | [optional] 
**precipitation** | **int** | Probability of non-zero precipitation. Unit: \\% | [optional] 
**storm** | **float** | Total precipitation amount accumulated since last hour. Unit: mm/h | [optional] 

## Example

```python
from openapi_client.models.point_point_hourly_prob_data import PointPointHourlyProbData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointHourlyProbData from a JSON string
point_point_hourly_prob_data_instance = PointPointHourlyProbData.from_json(json)
# print the JSON string representation of the object
print(PointPointHourlyProbData.to_json())

# convert the object into a dict
point_point_hourly_prob_data_dict = point_point_hourly_prob_data_instance.to_dict()
# create an instance of PointPointHourlyProbData from a dict
point_point_hourly_prob_data_from_dict = PointPointHourlyProbData.from_dict(point_point_hourly_prob_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


