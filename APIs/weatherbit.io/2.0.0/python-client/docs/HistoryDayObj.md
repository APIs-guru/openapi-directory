# HistoryDayObj


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **str** | Date in format \&quot;YYYY-MM-DD\&quot;. All datetime is in (UTC) | [optional] 
**dewpt** | **float** | Average dewpoint - Default (C) | [optional] 
**dhi** | **int** | Average hourly diffuse horizontal solar irradiance (W/m^2) | [optional] 
**dni** | **int** | Average direct normal solar irradiance (W/m^2) | [optional] 
**ghi** | **int** | Average hourly global horizontal solar irradiance (W/m^2) | [optional] 
**max_temp** | **float** | Max temperature - Default (C) | [optional] 
**max_temp_ts** | **float** | Time of max memperature - Unix Timestamp | [optional] 
**max_uv** | **float** | Max UV Index (1-11+) | [optional] 
**max_wind_dir** | **int** | Direction of wind at time of max 2min wind (degrees) | [optional] 
**max_wind_spd** | **float** | Max 2min Wind Speed - default (m/s) | [optional] 
**max_wind_spd_ts** | **float** | Time of max 2min wind - unix timestamp | [optional] 
**min_temp** | **float** | Min temperature - Default (C) | [optional] 
**min_temp_ts** | **float** | Time of max temperature - unix timestamp | [optional] 
**precip** | **float** | Liquid equivalent precipitation - default (mm) | [optional] 
**precip_gpm** | **float** | Satellite estimated liquid equivalent precipitation - default (mm) | [optional] 
**pres** | **float** | Average pressure (mb) | [optional] 
**revision_status** | **str** | Data revision status (interim or final) | [optional] 
**rh** | **int** | Average relative humidity as a percentage (%) | [optional] 
**slp** | **float** | Average sea level pressure (mb) | [optional] 
**snow** | **float** | Snowfall - default (mm) | [optional] 
**snow_depth** | **float** | Snow Depth - default (mm) | [optional] 
**t_dhi** | **int** | Total diffuse horizontal solar irradiance (W/m^2) | [optional] 
**t_dni** | **int** | Total direct normal solar irradiance (W/m^2) | [optional] 
**t_ghi** | **int** | Total global horizontal solar irradiance (W/m^2) | [optional] 
**temp** | **float** | Average temperature - Default (C) | [optional] 
**ts** | **int** | Unix timestamp of datetime (Midnight UTC) | [optional] 
**wind_dir** | **int** | Average wind direction (degrees) | [optional] 
**wind_gust_spd** | **float** | Wind gust speed - default (m/s) | [optional] 
**wind_spd** | **float** | Average wind speed - default (m/s) | [optional] 

## Example

```python
from openapi_client.models.history_day_obj import HistoryDayObj

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryDayObj from a JSON string
history_day_obj_instance = HistoryDayObj.from_json(json)
# print the JSON string representation of the object
print(HistoryDayObj.to_json())

# convert the object into a dict
history_day_obj_dict = history_day_obj_instance.to_dict()
# create an instance of HistoryDayObj from a dict
history_day_obj_from_dict = HistoryDayObj.from_dict(history_day_obj_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


