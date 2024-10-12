# CurrentObs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_temp** | **float** | Apparent temperature - Default (C) | [optional] 
**aqi** | **float** | Air quality index (US EPA standard 0 to +500) | [optional] 
**city_name** | **str** | City name (closest) | [optional] 
**clouds** | **int** | Cloud cover (%) | [optional] 
**country_code** | **str** | Country abbreviation | [optional] 
**datetime** | **str** | Cycle Hour (UTC) of observation | [optional] 
**dewpt** | **float** | Dew point temperature - default (C) | [optional] 
**dhi** | **float** | Diffuse horizontal irradiance (W/m^2) | [optional] 
**dni** | **float** | Direct normal irradiance (W/m^2) | [optional] 
**elev_angle** | **float** | Current solar elevation angle (Degrees) | [optional] 
**ghi** | **float** | Global horizontal irradiance (W/m^2) | [optional] 
**gust** | **float** | Wind gust speed - Default (m/s) | [optional] 
**hour_angle** | **float** | Current solar hour angle (Degrees) | [optional] 
**lat** | **float** | Latitude | [optional] 
**lon** | **float** | Longitude | [optional] 
**ob_time** | **str** | Full time (UTC) of observation (YYYY-MM-DD HH:MM) | [optional] 
**pod** | **str** | Part of the day (d &#x3D; day, n &#x3D; night) | [optional] 
**precip** | **float** | Precipitation in last hour - Default (mm) | [optional] 
**pres** | **float** | Pressure (mb) | [optional] 
**rh** | **int** | Relative humidity (%) | [optional] 
**slp** | **float** | Mean sea level pressure in millibars (mb) | [optional] 
**snow** | **float** | Snowfall in last hour - Default (mm) | [optional] 
**solar_rad** | **float** | Estimated solar radiation (W/m^2) | [optional] 
**sources** | **List[str]** | List of data sources used in response | [optional] 
**state_code** | **str** | State abbreviation | [optional] 
**station** | **str** | Source Station ID | [optional] 
**sunrise** | **str** | Time (UTC) of Sunrise (HH:MM) | [optional] 
**sunset** | **str** | Time (UTC) of Sunset (HH:MM) | [optional] 
**temp** | **float** | Temperature - Default (C) | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 
**ts** | **float** | Unix Timestamp | [optional] 
**uv** | **float** | UV Index | [optional] 
**vis** | **int** | Visibility - default (M) | [optional] 
**weather** | [**CurrentObsWeather**](CurrentObsWeather.md) |  | [optional] 
**wind_cdir** | **str** | Cardinal wind direction | [optional] 
**wind_cdir_full** | **str** | Cardinal wind direction (text) | [optional] 
**wind_dir** | **int** | Wind direction (degrees) | [optional] 
**wind_speed** | **float** | Wind speed - Default (m/s) | [optional] 

## Example

```python
from openapi_client.models.current_obs import CurrentObs

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentObs from a JSON string
current_obs_instance = CurrentObs.from_json(json)
# print the JSON string representation of the object
print(CurrentObs.to_json())

# convert the object into a dict
current_obs_dict = current_obs_instance.to_dict()
# create an instance of CurrentObs from a dict
current_obs_from_dict = CurrentObs.from_dict(current_obs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


