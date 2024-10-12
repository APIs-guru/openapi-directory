# HistorySubhourlyObj


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_temp** | **float** | Apparent Temperature or Wind Chill/Heat Index (Default Celcius) | [optional] 
**azimuth** | **float** | Solar azimuth angle (Degrees) | [optional] 
**clouds** | **int** | Cloud Cover 0-100 (%) | [optional] 
**dewpt** | **int** | Dew point (Default Celcius) | [optional] 
**dhi** | **float** | Diffuse normal solar irradiance (W/m^2) | [optional] 
**dni** | **float** | Direct normal solar irradiance (W/m^2) | [optional] 
**elev_angle** | **float** | Solar elevation angle (Degrees) | [optional] 
**ghi** | **float** | Global horizontal solar irradiance (W/m^2) | [optional] 
**pod** | **str** | Part of the day (d &#x3D; day, n &#x3D; night) | [optional] 
**precip_rate** | **float** | Liquid equivalent precipitation rate - Default (mm/hr) | [optional] 
**pres** | **float** | Pressure (mb) | [optional] 
**revision_status** | **str** | Data revision status (interim or final) | [optional] 
**rh** | **int** | Relative Humidity as a percentage (%) | [optional] 
**slp** | **float** | Sea level pressure (mb) | [optional] 
**snow_rate** | **float** | Snowfall Rate - Default (mm/hr) | [optional] 
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
from openapi_client.models.history_subhourly_obj import HistorySubhourlyObj

# TODO update the JSON string below
json = "{}"
# create an instance of HistorySubhourlyObj from a JSON string
history_subhourly_obj_instance = HistorySubhourlyObj.from_json(json)
# print the JSON string representation of the object
print(HistorySubhourlyObj.to_json())

# convert the object into a dict
history_subhourly_obj_dict = history_subhourly_obj_instance.to_dict()
# create an instance of HistorySubhourlyObj from a dict
history_subhourly_obj_from_dict = HistorySubhourlyObj.from_dict(history_subhourly_obj_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


