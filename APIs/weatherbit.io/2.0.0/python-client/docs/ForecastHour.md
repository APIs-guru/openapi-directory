# ForecastHour


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_temp** | **float** | Apparent Temperature - Default (C) | [optional] 
**clouds** | **int** | Cloud cover as a percentage (%) | [optional] 
**datetime** | **str** | Date in format \&quot;YYYY-MM-DD:HH\&quot;. All datetime is in (UTC) | [optional] 
**dewpt** | **float** | Dewpoint - Default (C) | [optional] 
**dhi** | **float** | Diffuse normal solar irradiance (W/m^2) | [optional] 
**dni** | **float** | Direct normal solar irradiance (W/m^2) | [optional] 
**ghi** | **float** | Global horizontal solar irradiance (W/m^2) | [optional] 
**pod** | **str** | Part of day (d &#x3D; day, n &#x3D; night) | [optional] 
**pop** | **float** | Chance of Precipitation as a percentage (%) | [optional] 
**precip** | **float** | Accumulated precipitation since last forecast point. Default (mm) | [optional] 
**pres** | **float** | Pressure (mb) | [optional] 
**rh** | **int** | Relative Humidity as a percentage (%) | [optional] 
**slp** | **float** | Mean Sea level pressure (mb) | [optional] 
**snow** | **float** | Accumulated snowfall since last forecast point - Default (mm) | [optional] 
**snow_depth** | **float** | Snow depth - Default (mm) | [optional] 
**solar_rad** | **float** | Estimated solar radiation (W/m^2) | [optional] 
**temp** | **float** | Temperature - Default (C) | [optional] 
**timestamp_local** | **str** | Timestamp in local time | [optional] 
**timestamp_utc** | **str** | Timestamp UTC | [optional] 
**ts** | **float** | Unix Timestamp | [optional] 
**uv** | **float** | UV Index | [optional] 
**vis** | **float** | Visibility - Default (KM) | [optional] 
**weather** | [**ForecastHourWeather**](ForecastHourWeather.md) |  | [optional] 
**wind_cdir** | **str** | Cardinal wind direction | [optional] 
**wind_cdir_full** | **str** | Cardinal wind direction (text) | [optional] 
**wind_dir** | **int** | Wind direction | [optional] 
**wind_gust_spd** | **float** | Wind Gust Speed - Default (m/s) | [optional] 
**wind_spd** | **float** | Wind Speed - Default (m/s) | [optional] 

## Example

```python
from openapi_client.models.forecast_hour import ForecastHour

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastHour from a JSON string
forecast_hour_instance = ForecastHour.from_json(json)
# print the JSON string representation of the object
print(ForecastHour.to_json())

# convert the object into a dict
forecast_hour_dict = forecast_hour_instance.to_dict()
# create an instance of ForecastHour from a dict
forecast_hour_from_dict = ForecastHour.from_dict(forecast_hour_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


