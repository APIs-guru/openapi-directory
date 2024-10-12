# CurrentObsWeather


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Weather Condition code | [optional] 
**description** | **str** | Weather Condition description | [optional] 
**icon** | **str** | Icon code for forecast image display | [optional] 

## Example

```python
from openapi_client.models.current_obs_weather import CurrentObsWeather

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentObsWeather from a JSON string
current_obs_weather_instance = CurrentObsWeather.from_json(json)
# print the JSON string representation of the object
print(CurrentObsWeather.to_json())

# convert the object into a dict
current_obs_weather_dict = current_obs_weather_instance.to_dict()
# create an instance of CurrentObsWeather from a dict
current_obs_weather_from_dict = CurrentObsWeather.from_dict(current_obs_weather_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


