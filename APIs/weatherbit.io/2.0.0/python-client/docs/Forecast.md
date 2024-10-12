# Forecast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_max_temp** | **float** | Apparent Maximum daily Temperature - default (C) | [optional] 
**app_min_temp** | **float** | Apparent Minimum daily Temperature - default (C) | [optional] 
**clouds** | **int** | Cloud cover as a percentage (%) | [optional] 
**datetime** | **str** | Date in format \&quot;YYYY-MM-DD:HH\&quot;. All datetime is in (UTC) | [optional] 
**dewpt** | **float** | Dewpoint (Average) - default (C) | [optional] 
**max_dhi** | **float** | [Deprecated] Max direct component of solar insolation (W/m^2) | [optional] 
**max_temp** | **float** | Maximum daily Temperature - default (C) | [optional] 
**min_temp** | **float** | Minimum daily Temperature - default (C) | [optional] 
**moon_phase** | **float** | Moon phase | [optional] 
**moonrise_ts** | **int** | Moonrise unix timestamp | [optional] 
**moonset_ts** | **int** | Moonset unix timestamp | [optional] 
**pod** | **str** | Part of the day (d &#x3D; day, n &#x3D; night) | [optional] 
**pop** | **float** | Chance of Precipitation as a percentage (%) | [optional] 
**precip** | **float** | Accumulated precipitation since last forecast point - default (mm) | [optional] 
**pres** | **float** | Pressure (mb) | [optional] 
**rh** | **int** | Relative Humidity as a percentage (%) | [optional] 
**slp** | **float** | Mean Sea level pressure (mb) | [optional] 
**snow** | **float** | Accumulated snowfall since last forecast point - default (mm) | [optional] 
**snow_depth** | **float** | Snow Depth - default (mm) | [optional] 
**sunrise_ts** | **int** | Sunrise unix timestamp | [optional] 
**sunset_ts** | **int** | Sunset unix timestamp | [optional] 
**temp** | **float** | Temperature (Average) - default (C) | [optional] 
**timestamp_local** | **str** | Timestamp in local time | [optional] 
**timestamp_utc** | **str** | Timestamp UTC | [optional] 
**ts** | **float** | Unix Timestamp | [optional] 
**uv** | **float** | UV Index | [optional] 
**vis** | **float** | Average Visibility default (KM) | [optional] 
**weather** | [**ForecastWeather**](ForecastWeather.md) |  | [optional] 
**wind_cdir** | **str** | Cardinal wind direction | [optional] 
**wind_cdir_full** | **str** | Cardinal wind direction (text) | [optional] 
**wind_dir** | **int** | Wind direction | [optional] 
**wind_spd** | **float** | Wind Speed (default m/s) | [optional] 

## Example

```python
from openapi_client.models.forecast import Forecast

# TODO update the JSON string below
json = "{}"
# create an instance of Forecast from a JSON string
forecast_instance = Forecast.from_json(json)
# print the JSON string representation of the object
print(Forecast.to_json())

# convert the object into a dict
forecast_dict = forecast_instance.to_dict()
# create an instance of Forecast from a dict
forecast_from_dict = Forecast.from_dict(forecast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


