# HistoryObj


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_temp** | **float** | Apparent Temperature or Wind Chill/Heat Index (Default Celcius) | [optional] 
**azimuth** | **float** | Azimuth angle (Degrees) | [optional] 
**clouds** | **int** | Cloud Cover 0-100 (%) | [optional] 
**datetime** | **str** | Date in format \&quot;YYYY-MM-DD:HH\&quot;. All datetime is in (UTC) | [optional] 
**dewpt** | **int** | Dew point (Default Celcius) | [optional] 
**dhi** | **float** | Diffuse normal solar irradiance (W/m^2) | [optional] 
**dni** | **float** | Direct normal solar irradiance (W/m^2) | [optional] 
**elev_angle** | **float** | Solar elevation angle (Degrees) | [optional] 
**ghi** | **float** | Global horizontal solar irradiance (W/m^2) | [optional] 
**h_angle** | **float** | Solar hour angle (Degrees) | [optional] 
**pod** | **str** | Part of the day (d &#x3D; day, n &#x3D; night) | [optional] 
**precip** | **float** | Liquid equivalent precipitation - Default (mm) | [optional] 
**pres** | **float** | Pressure (mb) | [optional] 
**revision_status** | **str** | Data revision status (interim or final) | [optional] 
**rh** | **int** | Relative Humidity as a percentage (%) | [optional] 
**slp** | **float** | Sea level pressure (mb) | [optional] 
**snow** | **float** | Snowfall - Default (mm) | [optional] 
**solar_rad** | **float** | Estimated solar radiation (W/m^2) | [optional] 
**temp** | **float** | Temperature (Default Celcius) | [optional] 
**timestamp_local** | **str** | Timestamp in local time | [optional] 
**timestamp_utc** | **str** | Timestamp UTC | [optional] 
**ts** | **float** | Unix Timestamp | [optional] 
**uv** | **float** | UV Index (1-11+) | [optional] 
**vis** | **float** | Visibility (KM) | [optional] 
**weather** | [**HistoryObjWeather**](HistoryObjWeather.md) |  | [optional] 
**wind_dir** | **int** | Wind direction (Degrees) | [optional] 
**wind_gust_spd** | **float** | Wind Gust Speed - Default (m/s) | [optional] 
**wind_spd** | **float** | Wind Speed (Default m/s) | [optional] 

## Example

```python
from openapi_client.models.history_obj import HistoryObj

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryObj from a JSON string
history_obj_instance = HistoryObj.from_json(json)
# print the JSON string representation of the object
print(HistoryObj.to_json())

# convert the object into a dict
history_obj_dict = history_obj_instance.to_dict()
# create an instance of HistoryObj from a dict
history_obj_from_dict = HistoryObj.from_dict(history_obj_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


