# PointPointDailyMorningWindData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | Morning wind direction angle in degrees, 180° means wind from the south. Unit: degrees | [optional] 
**dir** | **bytearray** | Morning wind direction in &#x60;N&#x60;, &#x60;NNE&#x60;, &#x60;NE&#x60;, ..., &#x60;NNW&#x60; format. Unit: 16dir | [optional] 
**gusts** | **float** | Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**speed** | **float** | Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_morning_wind_data import PointPointDailyMorningWindData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyMorningWindData from a JSON string
point_point_daily_morning_wind_data_instance = PointPointDailyMorningWindData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyMorningWindData.to_json())

# convert the object into a dict
point_point_daily_morning_wind_data_dict = point_point_daily_morning_wind_data_instance.to_dict()
# create an instance of PointPointDailyMorningWindData from a dict
point_point_daily_morning_wind_data_from_dict = PointPointDailyMorningWindData.from_dict(point_point_daily_morning_wind_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


