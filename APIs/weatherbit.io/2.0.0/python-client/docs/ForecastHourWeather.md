# ForecastHourWeather


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Weather Condition code | [optional] 
**description** | **str** | Weather Condition description | [optional] 
**icon** | **str** | Icon code for forecast image display | [optional] 

## Example

```python
from openapi_client.models.forecast_hour_weather import ForecastHourWeather

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastHourWeather from a JSON string
forecast_hour_weather_instance = ForecastHourWeather.from_json(json)
# print the JSON string representation of the object
print(ForecastHourWeather.to_json())

# convert the object into a dict
forecast_hour_weather_dict = forecast_hour_weather_instance.to_dict()
# create an instance of ForecastHourWeather from a dict
forecast_hour_weather_from_dict = ForecastHourWeather.from_dict(forecast_hour_weather_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


