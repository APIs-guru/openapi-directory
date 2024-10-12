# EnergyObsGroupForecast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City name (closest) | [optional] 
**country_code** | **str** | Country abbreviation | [optional] 
**data** | [**List[EnergyObsSeries]**](EnergyObsSeries.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**state_code** | **str** | State abbreviation | [optional] 
**threshold_units** | **str** | Degree day threshold units | [optional] 
**threshold_value** | **str** | Degree day threshold | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.energy_obs_group_forecast import EnergyObsGroupForecast

# TODO update the JSON string below
json = "{}"
# create an instance of EnergyObsGroupForecast from a JSON string
energy_obs_group_forecast_instance = EnergyObsGroupForecast.from_json(json)
# print the JSON string representation of the object
print(EnergyObsGroupForecast.to_json())

# convert the object into a dict
energy_obs_group_forecast_dict = energy_obs_group_forecast_instance.to_dict()
# create an instance of EnergyObsGroupForecast from a dict
energy_obs_group_forecast_from_dict = EnergyObsGroupForecast.from_dict(energy_obs_group_forecast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


