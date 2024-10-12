# PointPointDailySunData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_down** | **bool** | True if the sun never rises on given day (polar night), false otherwise. | [optional] 
**always_up** | **bool** | True if the sun never sets on given day (polar day), false otherwise. | [optional] 
**rise** | **datetime** | Datetime of the sunrise or null during polar day/night. | [optional] 
**set** | **datetime** | Datetime of the sunset or null during polar day/night. | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_sun_data import PointPointDailySunData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailySunData from a JSON string
point_point_daily_sun_data_instance = PointPointDailySunData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailySunData.to_json())

# convert the object into a dict
point_point_daily_sun_data_dict = point_point_daily_sun_data_instance.to_dict()
# create an instance of PointPointDailySunData from a dict
point_point_daily_sun_data_from_dict = PointPointDailySunData.from_dict(point_point_daily_sun_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


