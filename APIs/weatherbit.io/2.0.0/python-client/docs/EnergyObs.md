# EnergyObs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdd** | **float** | Cooling degree days | [optional] 
**city_name** | **str** | City name (closest) | [optional] 
**clouds** | **int** | Average cloud cover (%) | [optional] 
**country_code** | **str** | Country abbreviation | [optional] 
**dewpt** | **float** | Average dew point temperature - Default (C) | [optional] 
**hdd** | **float** | Heating degree days | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**precip** | **float** | Total precipitation in period - Default (mm) | [optional] 
**rh** | **int** | Average Relative humidity (%) | [optional] 
**snow** | **float** | Total snowfall in period - Default (mm) | [optional] 
**sources** | **List[str]** | List of data sources used in response | [optional] 
**state_code** | **str** | State abbreviation | [optional] 
**station_id** | **str** | Nearest Station ID [DEPRECATED] | [optional] 
**sun_hours** | **float** | Average number of daily sun hours - # hours where Solar GHI &gt; 1000 W/m^2 | [optional] 
**t_dhi** | **float** | Total diffuse horizontal solar irradiance (W/m^2) | [optional] 
**t_dni** | **float** | Total direct normal solar irradiance (W/m^2) | [optional] 
**t_ghi** | **float** | Total global horizontal solar irradiance (W/m^2) | [optional] 
**temp** | **float** | Average temperature - Default (C) | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 
**wind_dir** | **int** | Average wind direction (Degrees) | [optional] 
**wind_spd** | **float** | Average wind speed - Default (m/s) | [optional] 

## Example

```python
from openapi_client.models.energy_obs import EnergyObs

# TODO update the JSON string below
json = "{}"
# create an instance of EnergyObs from a JSON string
energy_obs_instance = EnergyObs.from_json(json)
# print the JSON string representation of the object
print(EnergyObs.to_json())

# convert the object into a dict
energy_obs_dict = energy_obs_instance.to_dict()
# create an instance of EnergyObs from a dict
energy_obs_from_dict = EnergyObs.from_dict(energy_obs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


