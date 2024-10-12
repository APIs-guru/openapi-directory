# WeatherAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[WeatherAlertGroup]**](WeatherAlertGroup.md) |  | [optional] 
**lat** | **float** | Latitude | [optional] 
**lon** | **float** | Longitude | [optional] 

## Example

```python
from openapi_client.models.weather_alert import WeatherAlert

# TODO update the JSON string below
json = "{}"
# create an instance of WeatherAlert from a JSON string
weather_alert_instance = WeatherAlert.from_json(json)
# print the JSON string representation of the object
print(WeatherAlert.to_json())

# convert the object into a dict
weather_alert_dict = weather_alert_instance.to_dict()
# create an instance of WeatherAlert from a dict
weather_alert_from_dict = WeatherAlert.from_dict(weather_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


