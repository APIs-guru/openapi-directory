# TimeMachineTimeMachineHourlyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cape** | **int** | Convective available potential energy. Unit: J/kg | [optional] 
**cloud_cover** | [**TimeMachineTimeMachineCloudCoverData**](TimeMachineTimeMachineCloudCoverData.md) |  | 
**var_date** | **datetime** | Datetime in YYYY-MM-DDTHH:MM:SS format. | [optional] 
**dew_point** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**evaporation** | **int** | Evaporation of liquid water into water vapor. Unit: mm/h | [optional] 
**feels_like** | **float** | Feels like temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**humidity** | **int** | Relative humidity. Unit: \\% | [optional] 
**icon** | **int** | Numeric identifier of the weather icon. The following values can appear:  * 1 - Not available * 2 - Sunny * 3 - Mostly sunny * 4 - Partly sunny * 5 - Mostly cloudy * 6 - Cloudy * 7 - Overcast * 8 - Overcast with low clouds * 9 - Fog * 10 - Light rain * 11 - Rain * 12 - Possible rain * 13 - Rain shower * 14 - Thunderstorm * 15 - Local thunderstorms * 16 - Light snow * 17 - Snow * 18 - Possible snow * 19 - Snow shower * 20 - Rain and snow * 21 - Possible rain and snow * 22 - Rain and snow * 23 - Freezing rain * 24 - Possible freezing rain * 25 - Hail * 26 - Clear (night) * 27 - Mostly clear (night) * 28 - Partly clear (night) * 29 - Mostly cloudy (night) * 30 - Cloudy (night) * 31 - Overcast with low clouds (night) * 32 - Rain shower (night) * 33 - Local thunderstorms (night) * 34 - Snow shower (night) * 35 - Rain and snow (night) * 36 - Possible freezing rain (night)  Unit: N/A | [optional] 
**irradiance** | **int** | Global downward short-wave radiation flux. Unit: W/m2 | [optional] 
**ozone** | **int** | Total column of ozone. Unit: Dobson | [optional] 
**precipitation** | [**TimeMachineTimeMachinePrecipitationData**](TimeMachineTimeMachinePrecipitationData.md) |  | 
**pressure** | **float** | Atmospheric pressure at mean sea level. Units: metric &#x3D; hPa, us &#x3D; Hg, uk &#x3D; hPa, ca &#x3D; kPa | [optional] 
**soil_temperature** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**surface_temperature** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**temperature** | **float** | Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**weather** | **str** | String identifier of the weather icon, e.g. &#x60;light_rain&#x60;. | [optional] 
**wind** | [**TimeMachineTimeMachineWindData**](TimeMachineTimeMachineWindData.md) |  | 
**wind_chill** | **float** | Windchill temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 

## Example

```python
from openapi_client.models.time_machine_time_machine_hourly_data import TimeMachineTimeMachineHourlyData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachineTimeMachineHourlyData from a JSON string
time_machine_time_machine_hourly_data_instance = TimeMachineTimeMachineHourlyData.from_json(json)
# print the JSON string representation of the object
print(TimeMachineTimeMachineHourlyData.to_json())

# convert the object into a dict
time_machine_time_machine_hourly_data_dict = time_machine_time_machine_hourly_data_instance.to_dict()
# create an instance of TimeMachineTimeMachineHourlyData from a dict
time_machine_time_machine_hourly_data_from_dict = TimeMachineTimeMachineHourlyData.from_dict(time_machine_time_machine_hourly_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


