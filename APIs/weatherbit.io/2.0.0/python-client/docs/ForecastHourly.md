# ForecastHourly


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City Name | [optional] 
**country_code** | **str** | Country Abbreviation | [optional] 
**data** | [**List[ForecastHour]**](ForecastHour.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**state_code** | **str** | State Abbreviation | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.forecast_hourly import ForecastHourly

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastHourly from a JSON string
forecast_hourly_instance = ForecastHourly.from_json(json)
# print the JSON string representation of the object
print(ForecastHourly.to_json())

# convert the object into a dict
forecast_hourly_dict = forecast_hourly_instance.to_dict()
# create an instance of ForecastHourly from a dict
forecast_hourly_from_dict = ForecastHourly.from_dict(forecast_hourly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


