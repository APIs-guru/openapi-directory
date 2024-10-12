# Forecast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | [**List[ForecastHoursInner]**](ForecastHoursInner.md) | Every hour with forecast data is represented with an object in this array | [optional] 
**meta** | [**ForecastMeta**](ForecastMeta.md) |  | [optional] 

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


