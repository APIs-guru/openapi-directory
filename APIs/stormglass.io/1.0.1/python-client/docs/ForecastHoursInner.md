# ForecastHoursInner

Hourly forecast information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_temperature** | [**List[ForecastHoursInnerAirTemperatureInner]**](ForecastHoursInnerAirTemperatureInner.md) |  | [optional] 
**swell_direction** | [**List[ForecastHoursInnerSwellDirectionInner]**](ForecastHoursInnerSwellDirectionInner.md) |  | [optional] 
**swell_height** | [**List[ForecastHoursInnerSwellHeightInner]**](ForecastHoursInnerSwellHeightInner.md) |  | [optional] 
**swell_period** | [**List[ForecastHoursInnerSwellPeriodInner]**](ForecastHoursInnerSwellPeriodInner.md) |  | [optional] 
**time** | **str** | Timestamp in utc for the hour represented | [optional] 
**water_temperature** | [**List[ForecastHoursInnerWaterTemperatureInner]**](ForecastHoursInnerWaterTemperatureInner.md) |  | [optional] 
**wave_direction** | [**List[ForecastHoursInnerWaveDirectionInner]**](ForecastHoursInnerWaveDirectionInner.md) |  | [optional] 
**wave_height** | [**List[ForecastHoursInnerWaveHeightInner]**](ForecastHoursInnerWaveHeightInner.md) |  | [optional] 
**wave_period** | [**List[ForecastHoursInnerWavePeriodInner]**](ForecastHoursInnerWavePeriodInner.md) |  | [optional] 
**wind_direction** | [**List[ForecastHoursInnerWindDirectionInner]**](ForecastHoursInnerWindDirectionInner.md) |  | [optional] 
**wind_speed** | [**List[ForecastHoursInnerWindSpeedInner]**](ForecastHoursInnerWindSpeedInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.forecast_hours_inner import ForecastHoursInner

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastHoursInner from a JSON string
forecast_hours_inner_instance = ForecastHoursInner.from_json(json)
# print the JSON string representation of the object
print(ForecastHoursInner.to_json())

# convert the object into a dict
forecast_hours_inner_dict = forecast_hours_inner_instance.to_dict()
# create an instance of ForecastHoursInner from a dict
forecast_hours_inner_from_dict = ForecastHoursInner.from_dict(forecast_hours_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


