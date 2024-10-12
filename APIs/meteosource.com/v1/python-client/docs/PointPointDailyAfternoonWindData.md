# PointPointDailyAfternoonWindData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | Afternoon wind direction angle in degrees, 180° means wind from the south. Unit: degrees | [optional] 
**dir** | **bytearray** | Afternoon wind direction in &#x60;N&#x60;, &#x60;NNE&#x60;, &#x60;NE&#x60;, ..., &#x60;NNW&#x60; format. Unit: 16dir | [optional] 
**gusts** | **float** | Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**speed** | **float** | Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_afternoon_wind_data import PointPointDailyAfternoonWindData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyAfternoonWindData from a JSON string
point_point_daily_afternoon_wind_data_instance = PointPointDailyAfternoonWindData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyAfternoonWindData.to_json())

# convert the object into a dict
point_point_daily_afternoon_wind_data_dict = point_point_daily_afternoon_wind_data_instance.to_dict()
# create an instance of PointPointDailyAfternoonWindData from a dict
point_point_daily_afternoon_wind_data_from_dict = PointPointDailyAfternoonWindData.from_dict(point_point_daily_afternoon_wind_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


