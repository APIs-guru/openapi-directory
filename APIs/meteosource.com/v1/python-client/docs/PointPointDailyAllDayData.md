# PointPointDailyAllDayData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_cover** | [**PointPointDailyAllDayCloudCoverData**](PointPointDailyAllDayCloudCoverData.md) |  | 
**dew_point** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**dew_point_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**dew_point_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**feels_like** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**feels_like_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**feels_like_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**humidity** | **int** | Relative humidity. (allday avg) Unit: \\% | [optional] 
**icon** | **int** | Numeric identifier of the weather icon. The following values can appear:  * 1 - Not available * 2 - Sunny * 3 - Mostly sunny * 4 - Partly sunny * 5 - Mostly cloudy * 6 - Cloudy * 7 - Overcast * 8 - Overcast with low clouds * 9 - Fog * 10 - Light rain * 11 - Rain * 12 - Possible rain * 13 - Rain shower * 14 - Thunderstorm * 15 - Local thunderstorms * 16 - Light snow * 17 - Snow * 18 - Possible snow * 19 - Snow shower * 20 - Rain and snow * 21 - Possible rain and snow * 22 - Rain and snow * 23 - Freezing rain * 24 - Possible freezing rain * 25 - Hail * 26 - Clear (night) * 27 - Mostly clear (night) * 28 - Partly clear (night) * 29 - Mostly cloudy (night) * 30 - Cloudy (night) * 31 - Overcast with low clouds (night) * 32 - Rain shower (night) * 33 - Local thunderstorms (night) * 34 - Snow shower (night) * 35 - Rain and snow (night) * 36 - Possible freezing rain (night)  Unit: icon | [optional] 
**ozone** | **float** | Total column of ozone. (allday avg) Unit: Dobson | [optional] 
**precipitation** | [**PointPointDailyAllDayPrecipitationData**](PointPointDailyAllDayPrecipitationData.md) |  | 
**pressure** | **float** | Atmospheric pressure at mean sea level. (allday avg) Units: metric &#x3D; hPa, us &#x3D; Hg, uk &#x3D; hPa, ca &#x3D; kPa | [optional] 
**probability** | [**PointPointDailyAllDayProbData**](PointPointDailyAllDayProbData.md) |  | 
**snow_depth** | **float** | Snow depth. (allday avg) Units: metric &#x3D; cm, us &#x3D; inch, uk &#x3D; cm, ca &#x3D; cm | [optional] 
**soil_temperature** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**soil_temperature_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**soil_temperature_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**surface_temperature** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**surface_temperature_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**surface_temperature_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**temperature** | **float** | Temperature 2 metres above ground. (allday avg) Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**temperature_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**temperature_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**visibility** | **float** | Visibility. (allday avg) Units: metric &#x3D; km, us &#x3D; mi, uk &#x3D; mi, ca &#x3D; km | [optional] 
**weather** | **str** | All day string identifier of the weather icon, e.g. &#x60;light_rain&#x60;. | [optional] 
**wind** | [**PointPointDailyAllDayWindData**](PointPointDailyAllDayWindData.md) |  | 
**wind_chill** | **float** | Temperature 2 metres above ground. (allday avg) Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**wind_chill_max** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**wind_chill_min** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_all_day_data import PointPointDailyAllDayData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyAllDayData from a JSON string
point_point_daily_all_day_data_instance = PointPointDailyAllDayData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyAllDayData.to_json())

# convert the object into a dict
point_point_daily_all_day_data_dict = point_point_daily_all_day_data_instance.to_dict()
# create an instance of PointPointDailyAllDayData from a dict
point_point_daily_all_day_data_from_dict = PointPointDailyAllDayData.from_dict(point_point_daily_all_day_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


