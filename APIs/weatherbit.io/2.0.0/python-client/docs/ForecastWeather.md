# ForecastWeather


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Weather Condition code | [optional] 
**description** | **str** | Weather Condition description | [optional] 
**icon** | **str** | Icon code for forecast image display | [optional] 

## Example

```python
from openapi_client.models.forecast_weather import ForecastWeather

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastWeather from a JSON string
forecast_weather_instance = ForecastWeather.from_json(json)
# print the JSON string representation of the object
print(ForecastWeather.to_json())

# convert the object into a dict
forecast_weather_dict = forecast_weather_instance.to_dict()
# create an instance of ForecastWeather from a dict
forecast_weather_from_dict = ForecastWeather.from_dict(forecast_weather_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


