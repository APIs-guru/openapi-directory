# ForecastsListResult

Result of listing forecasts. It contains a list of available forecasts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Forecast]**](Forecast.md) | The list of forecasts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.forecasts_list_result import ForecastsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastsListResult from a JSON string
forecasts_list_result_instance = ForecastsListResult.from_json(json)
# print the JSON string representation of the object
print(ForecastsListResult.to_json())

# convert the object into a dict
forecasts_list_result_dict = forecasts_list_result_instance.to_dict()
# create an instance of ForecastsListResult from a dict
forecasts_list_result_from_dict = ForecastsListResult.from_dict(forecasts_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


