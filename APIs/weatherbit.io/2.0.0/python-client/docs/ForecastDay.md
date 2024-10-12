# ForecastDay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City Name | [optional] 
**country_code** | **str** | Country Abbreviation | [optional] 
**data** | [**List[Forecast]**](Forecast.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**state_code** | **str** | State Abbreviation | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.forecast_day import ForecastDay

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastDay from a JSON string
forecast_day_instance = ForecastDay.from_json(json)
# print the JSON string representation of the object
print(ForecastDay.to_json())

# convert the object into a dict
forecast_day_dict = forecast_day_instance.to_dict()
# create an instance of ForecastDay from a dict
forecast_day_from_dict = ForecastDay.from_dict(forecast_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


