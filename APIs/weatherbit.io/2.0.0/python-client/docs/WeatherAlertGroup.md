# WeatherAlertGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | **List[str]** |  | [optional] 
**description** | **str** | Full description of weather alert | [optional] 
**effective_local** | **str** | Issued time local | [optional] 
**effective_utc** | **str** | Issued time UTC | [optional] 
**expires_local** | **str** | Expiration time local | [optional] 
**expires_utc** | **str** | Expiration time UTC | [optional] 
**severity** | **str** | Severity of weather. (Advisory | Watch | Warning) | [optional] 
**title** | **str** | Brief description of weather alert | [optional] 
**uri** | **str** | URI to weather alert | [optional] 

## Example

```python
from openapi_client.models.weather_alert_group import WeatherAlertGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WeatherAlertGroup from a JSON string
weather_alert_group_instance = WeatherAlertGroup.from_json(json)
# print the JSON string representation of the object
print(WeatherAlertGroup.to_json())

# convert the object into a dict
weather_alert_group_dict = weather_alert_group_instance.to_dict()
# create an instance of WeatherAlertGroup from a dict
weather_alert_group_from_dict = WeatherAlertGroup.from_dict(weather_alert_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


